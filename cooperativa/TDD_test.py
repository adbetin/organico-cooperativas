__author__ = 'asistente'

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
        self.browser.get('http://localhost:8000/cooperativa/servicio/crearServicio')
        h1 = self.browser.find_element(By.XPATH, '//h1[text()="Publicar Servicio"]')
        self.assertIn('Publicar Servicio', h1.text)


    def test_llenarcampos(self):
        self.browser.get('http://localhost:8000/cooperativa/servicio/crearServicio')

        self.browser.find_element_by_xpath(
            "//select[@id='cooperativa']/option[text()='Coop Bumanguesas 2']").click()

        titulo = self.browser.find_element_by_id('tituloServicio')
        titulo.send_keys('Próximos eventos del mes de Octubre')

        descripcion = self.browser.find_element_by_id('descripcionServicio')
        descripcion.send_keys('En el mes de octubre tendremos emocionantes eventos')

        foto = self.browser.find_element_by_id('fotoServicio')
        foto.send_keys("C:\\chromedriver\\blog-image-4.jpg")
        self.browser.implicitly_wait(3)

        botonGrabar = self.browser.find_element_by_id('guardar')

        actions = ActionChains(self.browser)
        actions.move_to_element(botonGrabar).perform()

        botonGrabar.click()

        self.browser.implicitly_wait(1000)

        wait = WebDriverWait(self.browser, 10)
        wait.until(lambda driver: driver.current_url != "http://localhost:8000/cooperativa/servicio/crearServicio")

        span = self.browser.find_element(By.XPATH, '//h3[text()="Próximos eventos del mes de Octubre"]')
        self.assertIn('Próximos eventos del mes de Octubre', span.text)