import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ConsultaCoordenador({ navigation }) {

  const [coordenadores] = useState([
    {
      id: 1,
      nome: 'Exemplo de Coordenador',
      cpf: '000.000.000-00',
      email: 'coordenador@email.com',
      telefone: '(00) 00000-0000'
    }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Consulta de Coordenadores
      </Text>

      {coordenadores.length === 0 ? (

        <Text style={styles.vazio}>
          Nenhum coordenador cadastrado.
        </Text>

      ) : (

        coordenadores.map((coordenador) => (

          <View style={styles.card} key={coordenador.id}>

            <Text style={styles.nome}>
              {coordenador.nome}
            </Text>

            <Text>CPF: {coordenador.cpf}</Text>
            <Text>E-mail: {coordenador.email}</Text>
            <Text>Telefone: {coordenador.telefone}</Text>

          </View>

        ))

      )}

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.textoBotao}>
          Voltar para o início
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 30
  },

  card: {
    padding: 18,
    backgroundColor: '#F2F7FC',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D0D0D0'
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 10
  },

  vazio: {
    textAlign: 'center',
    fontSize: 17,
    color: '#666666'
  },

  botaoVoltar: {
    backgroundColor: '#666666',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }

});