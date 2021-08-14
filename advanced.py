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

## Adv.5.PyTest Code Steps
class TestHomepage():
  def setup_method(self, method):
    ## Important: to add headless argument for the load test
    #options = webdriver.ChromeOptions() 
    #options.add_argument('headless')
    #self.driver = webdriver.Chrome(chrome_options=options)
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_clickrecipe(self):
    # Test name: click-recipe
    # Step # | name | target | value | comment
    # 1 | open | / |  | 
    self.driver.get("https://dev-ps-loadtest-dummy.pantheonsite.io/")
    # 2 | setWindowSize | 1680x978 |  | 
    self.driver.set_window_size(1680, 978)
    # 3 | click | linkText=Log in |  | 
    self.driver.find_element(By.LINK_TEXT, "Log in").click()
    # 4 | waitForElementEditable | id=edit-name | 30000 | 
    WebDriverWait(self.driver, 30000).until(expected_conditions.element_to_be_clickable((By.ID, "edit-name")))
    # 5 | type | id=edit-name | umami | 
    self.driver.find_element(By.ID, "edit-name").send_keys("umami")
    # 6 | type | id=edit-pass | umami | 
    self.driver.find_element(By.ID, "edit-pass").send_keys("umami")
    # 7 | click | name=op |  | 
    self.driver.find_element(By.NAME, "op").click()
    # 8 | click | linkText=Home |  | 
    self.driver.find_element(By.LINK_TEXT, "Home").click()
    # 9 | click | linkText=View recipe |  | 
    self.driver.find_element(By.LINK_TEXT, "View recipe").click()
    # 10 | click | linkText=Edit |  | 
    self.driver.find_element(By.LINK_TEXT, "Edit").click()
    # 11 | click | id=edit-title-0-value |  | 
    self.driver.find_element(By.ID, "edit-title-0-value").click()
    # 12 | type | id=edit-title-0-value | Super easy vegetarian pasta bake and more | 
    self.driver.find_element(By.ID, "edit-title-0-value").send_keys("Super easy vegetarian pasta bake and more")
    # 13 | click | css=.js-form-item-field-recipe-category-target-id |  | 
    self.driver.find_element(By.CSS_SELECTOR, ".js-form-item-field-recipe-category-target-id").click()
    # 14 | click | id=edit-submit |  | 
    self.driver.find_element(By.ID, "edit-submit").click()
    # 15 | click | css=.menu-main |  | 
    self.driver.find_element(By.CSS_SELECTOR, ".menu-main").click()
    # 16 | mouseOver | css=.site-logo > img |  | 
    element = self.driver.find_element(By.CSS_SELECTOR, ".site-logo > img")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    # 17 | click | css=.site-logo > img |  | 
    self.driver.find_element(By.CSS_SELECTOR, ".site-logo > img").click()

## Adv.T Custom Scripts, CasperJS, Selenium, PyTest etc
class AdvancedTaskSet(TaskSet):
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
    
    def on_start(self):
        self.login() # on_start is called when a Locust start before, any task is scheduled

    def on_stop(self):
        self.client.get("/user/logout")

    ## Adv.6.0 Recorded Selenium Steps, Selenium Recorder and export to pytest
    # @task(1)
    # def pytest(self):
    #      start_time = time.time()
    #      os.system("pytest locustfile.py")
    #      total_time = int((time.time() - start_time) * 1000)
    #      events.request_success.fire(
    #          request_type="pytest",
    #          name="update-recipe-item",
    #          response_time=total_time,
    #          response_length=0
    #      )

    ## CasperJS - Use Katalaon Recorder
    # @task(1)
    # def casperjs(self):
    #     start_time = time.time()
    #     # Python file example
    #     # os.system("python casperjs/casperjs.py")
    #     # CasperJS file example
    #     os.system("casperjs test casper.js")
    #     total_time = int((time.time() - start_time) * 1000)
    #     events.request_success.fire(
    #         request_type="casperjs",
    #         name="purchase_physical_prod",
    #         response_time=total_time,
    #         response_length=0
    #     )

    ## Selenium - Use Selenium IDE Recorder 
    @task(1)
    def selenium(self):
        start_time = time.time()
        os.system('selenium-side-runner -c "goog:chromeOptions.args=[--headless,--nogpu] browserName=chrome" locustfile.side')
        total_time = int((time.time() - start_time) * 1000)
        events.request_success.fire(
            request_type="selenium",
            name="login-search",
            response_time=total_time,
            response_length=0
        )

## Adv.U Advanced User Setting
class AdvancedUser(HttpLocust):
    host = os.getenv('TARGET_URL', "https://dev-ps-loadtest-dummy.pantheonsite.io")
    task_set = AdvancedTaskSet
    wait_time = between(1, 10)

