import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ConsultaMatricula({ navigation }) {

  const [matriculas] = useState([
    {
      id: 1,
      aluno: 'Exemplo de Aluno',
      curso: 'Desenvolvimento de Sistemas',
      data: '01/01/2026',
      status: 'Ativa'
    }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Consulta de Matrículas
      </Text>

      {matriculas.length === 0 ? (

        <Text style={styles.vazio}>
          Nenhuma matrícula cadastrada.
        </Text>

      ) : (

        matriculas.map((matricula) => (

          <View style={styles.card} key={matricula.id}>

            <Text style={styles.nome}>
              Matrícula #{matricula.id}
            </Text>

            <Text>Aluno: {matricula.aluno}</Text>
            <Text>Curso: {matricula.curso}</Text>
            <Text>Data: {matricula.data}</Text>
            <Text>Status: {matricula.status}</Text>

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