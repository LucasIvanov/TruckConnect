from kivy.uix.screenmanager import Screen
from kivy.properties import ObjectProperty
import json
import uuid

class TelaHomeProdutor(Screen):
    produto = ObjectProperty(None)
    quantidade = ObjectProperty(None)
    origem = ObjectProperty(None)
    destino = ObjectProperty(None)

    def postar_carga(self):
        with open('dados/cargas.json', 'r+') as f:
            try:
                cargas = json.load(f)
            except json.JSONDecodeError:
                cargas = {}

        id_carga = str(uuid.uuid4())
        cargas[id_carga] = {
            'produto': self.produto.text,
            'quantidade': self.quantidade.text,
            'origem': self.origem.text,
            'destino': self.destino.text,
            'status': 'disponivel'
        }

        with open('dados/cargas.json', 'w') as f:
            json.dump(cargas, f, indent=4)

        print("Carga postada com sucesso!")
        # Limpa os campos após postar
        self.produto.text = ''
        self.quantidade.text = ''
        self.origem.text = ''
        self.destino.text = ''