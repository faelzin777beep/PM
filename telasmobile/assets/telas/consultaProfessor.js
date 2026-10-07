import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ConsultaProfessor({ navigation }) {

  const [professores] = useState([
    {
      id: 1,
      nome: 'Exemplo de Professor',
      cpf: '000.000.000-00',
      email: 'professor@email.com',
      telefone: '(00) 00000-0000'
    }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Consulta de Professores
      </Text>

      {professores.length === 0 ? (

        <Text style={styles.vazio}>
          Nenhum professor cadastrado.
        </Text>

      ) : (

        professores.map((professor) => (

          <View style={styles.card} key={professor.id}>

            <Text style={styles.nome}>
              {professor.nome}
            </Text>

            <Text>CPF: {professor.cpf}</Text>
            <Text>E-mail: {professor.email}</Text>
            <Text>Telefone: {professor.telefone}</Text>

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
    padding: 20,
    backgroundColor: '#FFFFFF'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 30
  },

  card: {
    width: '100%',
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
    width: '100%',
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