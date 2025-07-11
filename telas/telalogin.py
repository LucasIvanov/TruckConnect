from kivy.uix.screenmanager import Screen
from kivy.properties import ObjectProperty
import json

class TelaLoginProdutor(Screen):
    email = ObjectProperty(None)
    senha = ObjectProperty(None)

    def fazer_login(self):
        with open('dados/usuarios.json') as f:
            usuarios = json.load(f)
        
        email = self.email.text
        senha = self.senha.text

        if email in usuarios and usuarios[email]['senha'] == senha and usuarios[email]['tipo'] == 'produtor':
            self.manager.current = 'home_produtor'
        else:
            print("Email ou senha incorretos")

class TelaLoginTransportadora(Screen):
    email = ObjectProperty(None)
    senha = ObjectProperty(None)

    def fazer_login(self):
        with open('dados/usuarios.json') as f:
            usuarios = json.load(f)

        email = self.email.text
        senha = self.senha.text

        if email in usuarios and usuarios[email]['senha'] == senha and usuarios[email]['tipo'] == 'transportadora':
            self.manager.current = 'home_transportadora'
        else:
            print("Email ou senha incorretos")