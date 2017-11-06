__author__ = 'asistente'

#from __future__ import absolute_import

from unittest import TestCase
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

#from selenium import webbrowser

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


    def test_llenarcampos(self):
        self.browser.get('http://localhost:8000/cooperativa/servicio/crearServicio')

        self.browser.find_element_by_xpath(
            "//select[@id='cooperativa']/option[text()='cooperativa']").click()

        titulo = self.browser.find_element_by_id('titulo')
        titulo.send_keys('Próximos eventos del mes de Octubre')

        descripcion = self.browser.find_element_by_id('descripcion')
        descripcion.send_keys('En el mes de octubre tendremos emocionantes eventos')

        foto = self.browser.find_element_by_id('foto')
        foto.send_keys("C:\\chromedriver\\blog-image-4.jpg")
        self.browser.implicitly_wait(3)

        botonGrabar = self.browser.find_element_by_id('guardar')
        actions = ActionChains(self.browser)
        actions.move_to_element(botonGrabar).perform()
        self.browser.implicitly_wait(3)
        botonGrabar.click()

        span = self.browser.find_element(By.XPATH, '//span[text()="Servicio publicado exitosamente"]')
        self.assertIn('Servicio publicado exitosamente', span.text)