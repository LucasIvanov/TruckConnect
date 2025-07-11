from kivy.uix.screenmanager import Screen
from kivy.properties import ObjectProperty
import json

class TelaRegistro(Screen):
    nome = ObjectProperty(None)
    email = ObjectProperty(None)
    senha = ObjectProperty(None)
    tipo_usuario = ObjectProperty(None)

    def registrar_usuario(self):
        with open('dados/usuarios.json', 'r+') as f:
            try:
                usuarios = json.load(f)
            except json.JSONDecodeError:
                usuarios = {}
        
        email = self.email.text
        if email in usuarios:
            print("Email já cadastrado")
            return

        usuarios[email] = {
            'nome': self.nome.text,
            'senha': self.senha.text,
            'tipo': self.tipo_usuario.text.lower()
        }

        with open('dados/usuarios.json', 'w') as f:
            json.dump(usuarios, f, indent=4)
        
        print("Usuário registrado com sucesso!")
        self.manager.current = 'login_produtor'