__author__ = 'asistente'

#from __future__ import absolute_import

from unittest import TestCase
from selenium import webdriver

from selenium.webdriver.common.by import By

class TDDTest(TestCase):

    def setUp(self):
        self.browser = webdriver.Chrome("C:\\chromedriver\\chromedriver.exe")
        self.browser.implicitly_wait(2)

    def tearDown(self):
        self.browser.quit()

    def test_accesoformulario(self):
        self.browser.get('http://localhost:8000/cooperativa/servicio/crearServicio')
        h1 = self.browser.find_element(By.XPATH, '//h1[text()="Publicar Servicio"]')
        self.assertIn('Publicar Servicio', h1.text)