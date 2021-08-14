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

## Anon.T Anonymous TaskSet
class AnonymousTaskSet(TaskSet):

    ## Anon.1.0 Random URLs from Homepage
    def anon_index_page(self, path="/"):
        # Using PyQuery, we look for anchor elements from the homepage (or any path) 
        r = self.client.get("/")
        pq = PyQuery(r.content)
        link_elements = pq("a")

        self.urls_on_current_page = [] # Pass the results into an array.

        # A loop reads the array and randomly picks a path 
        for l in link_elements:
            if "href" in l.attrib:
                url = l.attrib["href"]
                if url != "/user/logout":
                    # Ensure we only run links of the target site, excluding specific domains too
                    if url != "//dev-ps-loadtest-dummy.pantheonsite.io" and url is not None and "#" not in url and (url.startswith('https://dev-ps-loadtest-dummy.pantheonsite.io') or url.startswith('/')):
                        self.urls_on_current_page.append(l.attrib["href"])\
                        
    @task(1) 
    def load_anon_index_page(self):
        self.anon_index_page("/")
        count = 0
        while (count < 10):
            count = count + 1
            url = random.choice(self.urls_on_current_page)
            print("Calling ", url)
            self.client.get(url)
    ## Anon.1.0 End
    

    ## Anon.2.0 XML Sitemap Random pick
    def extract_sitemap(self, path="/sitemap.xml"):
        r = self.client.get("/sitemap.xml")
        locs = BeautifulSoup(r.text, 'lxml') # Pre-req is to use 'from bs4 import BeautifulSoup'
        self.urls_on_sitemap = [] # Pass the results into an array.
        for loc in locs.select('url > loc'):
            self.urls_on_sitemap.append(loc.text)
            
    @task(1) 
    def anon_random_sitemap(self):
        self.extract_sitemap("/")
        count = 0
        while (count < 10):
            count = count + 1
            url = random.choice(self.urls_on_sitemap)
            print("Calling ", url)
            self.client.get(url)
    ## Anon.2.0 End


    ## Anon.3.0 Core Search Form Submission
    @task(1)
    def search(self):
        f = open('./search/umami.txt', 'r')
        searchWords = {}
        i = 0
        for X in f:
            searchWords[i] = X.rstrip()
            i = i+1
        print(len(searchWords))
        # Search Paths
        #url = "/search/node/"+random.choice(searchWords) # Search path with Clean URL search
        url = "/en/search/node?keys="+random.choice(searchWords) # Search path with Clean URL search
        print("Calling ", url)
        r = self.client.get(url)
    ## Anon.3.0 End


    ## Anon.4.0 User Login Page for Drupal 8
    @task(1)
    def login(self):
        #login function using http session handler. Modify for the actual login path
        request_path = "/user/login"
        self.client.post(request_path, {
            "name": "umami",
            "pass": "umami",
            "form_id": "user_login_form",
            "form_build_id": get_form_build_id(self, request_path),
            "op": "Log in"
        })
    ## Anon.4.0 End

    
    ## Anon.5.0 User Registration Form
    #  Assuming that Public Registration is enabled for the site
    @task(1)
    def user_register(self):
        request_path = "/user/register"
    
        # Generate random email, or pick random email from list
        random_email = "test-" + "".join(random.choice(string.ascii_lowercase) for i in range(7)) + "@ps-pantheontest.com"
        random_name = "".join(random.choice(string.ascii_lowercase) for i in range(12)) 

        # Submit Registration Information
        self.client.post(request_path, {
            "mail": random_email,
            "name": random_name, # Add more required fields if needed
            "form_id": "user_register_form",
            "form_build_id": get_form_build_id(self,request_path),
            "op": "Create new account"
        })
    ## Anon.5.0 End


    ## Anon.6.0 WebForm Submissions
    @task(1)
    def webform_submit(self):
        request_path = "/chef-application"
        self.client.post(request_path, {
            "contact[name]": "My Name",
            "contact[company]": "My Company",
            "contact[email]": "example@email.com",
            "contact[phone]": "09088772988",
            "contact[address]": "Address 1 Entry",
            "contact[address_2]": "Address 2 Entry",
            "contact[city]": "San Francisco",
            "contact[state_province]": "California",
            "contact[postal_code]": "90210",
            "contact[country]": "Philippines",
            "form_id": "webform_submission_demo_application_node_130_add_form",
            "form_build_id": get_form_build_id(self,request_path),
            "op": "Submit"
        })
    ## Anon.6.0 End
      

    ## Anon.7.0 API Endpoints (REST/JSON:API)
    ## TODO - actual endpoints functions and helpers
    
    ## Anon.7.0 End 

#Anon.U Anonymous User
class AnonymousUser(HttpLocust):
    host = os.getenv('TARGET_URL', "https://dev-ps-loadtest-dummy.pantheonsite.io")
    task_set = AnonymousTaskSet
    wait_time = between(1, 3)