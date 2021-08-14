# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys

class TestKedbloginsearch():
  def setup_method(self, method):
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    self.driver = webdriver.Chrome(chrome_options=options)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_kedbloginsearch(self):
    # Test name: kedb-login-search
    # Step # | name | target | value | comment
    # 1 | open | / |  | 
    self.driver.get("http://dev-kedb-d7.pantheonsite.io/")
    # 2 | click | id=edit-name |  | 
    self.driver.find_element(By.ID, "edit-name").click()
    # 3 | type | id=edit-name | eladio@getpantheon.com | 
    self.driver.find_element(By.ID, "edit-name").send_keys("eladio@getpantheon.com")
    # 4 | type | id=edit-pass | [Pantheon]1234 | 
    self.driver.find_element(By.ID, "edit-pass").send_keys("[Pantheon]1234")
    # 5 | click | id=edit-submit |  | 
    self.driver.find_element(By.ID, "edit-submit").click()
    # 6 | click | id=facetapi-link--556 |  | 
    self.driver.find_element(By.ID, "facetapi-link--556").click()
    # 7 | click | css=#block-facetapi-qjejqftyhn5j90hmbhoy3t0dllnssrjt > .block-title |  | 
    self.driver.find_element(By.CSS_SELECTOR, "#block-facetapi-qjejqftyhn5j90hmbhoy3t0dllnssrjt > .block-title").click()
    # 8 | click | linkText=Log out |  | 
    self.driver.find_element(By.LINK_TEXT, "Log out").click()
    # 9 | setWindowSize | 960x1008 |  | 
    self.driver.set_window_size(960, 1008)
  