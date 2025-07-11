from kivy.uix.screenmanager import Screen
from kivy.properties import ObjectProperty
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
import json

class ItemCarga(BoxLayout):
    def __init__(self, carga, **kwargs):
        super().__init__(**kwargs)
        self.orientation = 'vertical'
        self.add_widget(Label(text=f"Produto: {carga['produto']}"))
        self.add_widget(Label(text=f"Quantidade: {carga['quantidade']}t"))
        self.add_widget(Label(text=f"Origem: {carga['origem']}"))
        self.add_widget(Label(text=f"Destino: {carga['destino']}"))
        self.add_widget(Label(text="-"*20))


class TelaHomeTransportadora(Screen):
    lista_cargas = ObjectProperty(None)

    def on_enter(self, *args):
        self.atualizar_lista_cargas()

    def atualizar_lista_cargas(self):
        self.lista_cargas.clear_widgets()
        with open('dados/cargas.json') as f:
            try:
                cargas = json.load(f)
            except json.JSONDecodeError:
                cargas = {}
        
        for id_carga, dados_carga in cargas.items():
            if dados_carga['status'] == 'disponivel':
                self.lista_cargas.add_widget(ItemCarga(carga=dados_carga))