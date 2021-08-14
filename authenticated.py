import os
import string
import random
import time
import pytest
import json
import selenium
from bs4 import BeautifulSoup
from faker import Faker
from locust import HttpLocust, TaskSet, task, events, between
from locust.clients import HttpSession
from pyquery import PyQuery
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys

### HELPER FUNCTIONS Section
# To use, import helper 
#
## Drupal 8 - Get form_build_id value via parsing
def get_form_build_id(self, request_path):
    # Get form build ID to pass back to Drupal on login.
    response = self.client.get(request_path)
    parsed_html = BeautifulSoup(response.content, "lxml")
    form_build_id = parsed_html.body.find('input', {'name': 'form_build_id'})['value']
    return form_build_id

## Drupal 8 - Get form_token for creating content
def get_form_token(self, request_path):
    # Get form build ID to pass back to Drupal on login.
    response = self.client.get(request_path)
    parsed_html = BeautifulSoup(response.content, "lxml")
    form_token = parsed_html.body.find('input', {'name': 'form_token'})['value']
    return form_token

## Drupal 8 - Get random article from page
def get_random_article(self, source_path, search_class, comment_form_id):
    resp = self.client.get(source_path)

    parsed_html = BeautifulSoup(resp.content, "lxml")
    article_links = [link['href'] for link in parsed_html.body.findAll("a", {"class": search_class})]
    random_article_path = random.choice(article_links)

    # Parse returned article for comment form ID and post path
    random_article_html = BeautifulSoup(self.client.get(random_article_path).content)
    comment_post_path = random_article_html.body.find('form', {'id': comment_form_id})['action']
    return { "random_article_path": random_article_path, "comment_post_path": comment_post_path }

#############

## Auth.T Authenticated TaskSet
class AuthenticatedTaskSet(TaskSet):
    ## Auth.1.0 User Login Form (Drupal 7 and WordPress)
    # @task(1)
    # def login_user(self):
    #     #login function using http session handler. modify as needed.
    #     self.client.get("/user/login") 
    #     self.client.post("/user/login", {"name":"umami", "pass":"umami", "form_id": "user_login", "op": "Log in"})

    ## Auth.1.1 User Login Function and Form (Drupal 8)
    def on_start(self):
        self.login() # on_start is called when a Locust start before, any task is scheduled

    def login(self):
        # login function using http session handler. Modify for the actual login path
        request_path = "/user/login"
        self.client.post(request_path, {
            "name": "umami",
            "pass": "umami",
            "form_id": "user_login_form",
            "form_build_id": get_form_build_id(self, request_path),
            "op": "Log in"
        })
    
    def on_stop(self):
        self.client.get("/user/logout")

    ## Auth.1.1 User Login then Navigate Site. Add some pages to load.
    @task(1)
    def navigate_site_steps(self):
        self.client.get("/")
        self.client.get("/user/1/edit")
        # Add more paths or pages here    
    ## Auth.1.0 End

    ## 2.0 Create an Article
    @task(1)
    def create_node_article(self):
        ## TODO
        # Add "files[field_image_0]": get_lorem_picsum(),
        
        # Create new Faker instance and text
        fake = Faker() 
        article_title = fake.format('sentence')
        article_body = fake.format('text')
        article_tags = fake.format('word')
        print(article_title)
        print(article_body)
        print(article_tags)

        request_path = "/node/add/article"
        self.client.post(request_path, {
            "title[0][value]": article_title,
            "body[0][value]": article_body,
            "field_tags[target_id]": article_tags,
            "langcode[0][value]": "en",
            "moderation_state[0][state]": "published", ## Depending on the roles and permissions, this might not work
            "form_id": "node_article_form",
            "form_token": get_form_token(self, request_path),
            "form_build_id": get_form_build_id(self, request_path),
            "op": "Save"
        })
    ## 2.0 End

    ## 3.0 Adding Comments to Articles
    # Scenario: Configured to only post as Authenticated
    # Make sure that BigPipe is turned-off in Drupal 8 
    # The response content is not complete and unable to be parsed by lxml
    @task(1)
    def create_node_article_comment(self):
        fake = Faker() # Create new Faker instance
        
        # Find a random article from a page
        # self, Articles or News page, the "class" for Article Links, and the Comment Form ID for all comments
        random_comment = get_random_article(self, "/articles", "read-more__link", "comment-form")
        comment_post_path = random_comment["random_article_path"]
        random_article_path = random_comment["comment_post_path"]
        print("Random Article: " + random_article_path)
        print("Comment Post Path: " + comment_post_path)
        
        # Post the Comment to the selected 
        self.client.post(comment_post_path, {
            "subject[0][value]": fake.sentence(),
            "comment_body[0][value]": fake.text(),
            "langcode[0][value]": "en",
            "form_id": "comment_article_comment_form", ## Change depending on the Content type machine name
            "form_token": get_form_token(self, random_article_path),
            "form_build_id": get_form_build_id(self, random_article_path),
            "op": "Save"
        })
    ## 3.0 End

    ## TODO - 4.0 Create an article via JSON:API
    # @task(100)
    # def jsonapi_crete_node_article(self):
    #     # Create new Faker instance and text
    #     fake = Faker() 
    #     article_title = fake.format('sentence')
    #     article_body = fake.format('text')
    #     article_tags = fake.format('word')
    #     print(article_title)
    #     print(article_body)
    #     print(article_tags)
        
    #     payload = { 
    #                 "data": {
    #                     "type": "node--article",
    #                     "attributes": {
    #                         "title": article_title,
    #                         "body": {
    #                             "value": article_body,
    #                             "format": "plain_text"
    #                             }
    #                         }
    #                     }
    #                 }

    #     endpoint = "/jsonapi/node/article"
    #     self.client.post(endpoint, data=json.dumps(payload), headers={'Accept: application/vnd.api+json', 'Content-Type': 'application/vnd.api+json'}, auth=('umami', 'umami'))  
    ## 4.0 End

    ## 5.0 Commerce Shopping Cart Steps
    ## 5.0 End

#Auth.U Authenticated User
class AuthenticatedUser(HttpLocust):
    host = os.getenv('TARGET_URL', "https://dev-ps-loadtest-dummy.pantheonsite.io")
    task_set = AuthenticatedTaskSet
    wait_time = between(5, 20)

