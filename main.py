import json
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.lang import Builder

from telas.telalogin import TelaLoginProdutor, TelaLoginTransportadora
from telas.telaregistro import TelaRegistro
from telas.telahomeprodutor import TelaHomeProdutor
from telas.telahometransportadora import TelaHomeTransportadora

class GerenciadorTelas(ScreenManager):
    pass

class MainApp(App):
    def build(self):
        # Carrega os arquivos .kv para o builder
        Builder.load_file('telas/telalogin.kv')
        Builder.load_file('telas/telaregistro.kv')
        Builder.load_file('telas/telahomeprodutor.kv')
        Builder.load_file('telas/telahometransportadora.kv')

        # Inicializa o gerenciador de telas
        sm = GerenciadorTelas()
        sm.add_widget(TelaLoginProdutor(name='login_produtor'))
        sm.add_widget(TelaLoginTransportadora(name='login_transportadora'))
        sm.add_widget(TelaRegistro(name='registro'))
        sm.add_widget(TelaHomeProdutor(name='home_produtor'))
        sm.add_widget(TelaHomeTransportadora(name='home_transportadora'))
        return sm

if __name__ == '__main__':
    MainApp().run()