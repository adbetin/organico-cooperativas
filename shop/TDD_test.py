__author__ = 'e.aperador@uniandes.edu.co'

#from __future__ import absolute_import

from unittest import TestCase
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

#from selenium import webbrowser

from selenium.webdriver.common.by import By

class TDDTest(TestCase):

    def setUp(self):
        self.browser = webdriver.Chrome("C:\\chromedriver\\chromedriver.exe")
        self.browser.implicitly_wait(2)

    def tearDown(self):
        self.browser.quit()

    def test_accesoformulario(self):
        self.browser.get('http://localhost:8000/')
        a = self.browser.find_element(By.XPATH, '//a[@data-target="#login-modal"]')
        a.click()
        self.browser.implicitly_wait(1000)

        usuario = self.browser.find_element(By.XPATH, '//input[@name="user"]')
        usuario.send_keys('efrain')

        password = self.browser.find_element(By.XPATH, '//input[@name="password"]')
        password.send_keys('agiles123')

        login = self.browser.find_element_by_id('loginButton');
        login.click()

        wait = WebDriverWait(self.browser, 10)
        wait.until(lambda driver: driver.current_url == "http://localhost:8000/")

        self.browser.get('http://localhost:8000/shop')

        addToCart = self.browser.find_element_by_css_selector('.theme-btn.add-cart-btn:nth-child(1)')
        addToCart.click()

        self.browser.get('http://localhost:8000/shop/checkout')

        tarjeta = self.browser.find_element_by_id('tarjetaEntrega');
        tarjeta.send_keys('1234-1234-1234-1234')

        direccionEntrega = self.browser.find_element_by_id('direccionEntrega')
        direccionEntrega.send_keys('Calle falsa 123')

        telefonoEntrega = self.browser.find_element_by_id('telefonoEntrega')
        telefonoEntrega.send_keys('7404040')

        checkout = self.browser.find_element(By.XPATH, '//button[@class="btn btn-success btn-block"]')
        checkout.click()

        wait = WebDriverWait(self.browser, 10)
        wait.until(lambda driver: driver.current_url == "http://localhost:8000/")

        self.assertIn('http://localhost:8000/', lambda driver: driver.current_url)