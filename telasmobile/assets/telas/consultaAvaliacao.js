import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ConsultaAvaliacao({ navigation }) {

  const [avaliacoes] = useState([
    {
      id: 1,
      aluno: 'Exemplo de Aluno',
      disciplina: 'Matemática',
      nota: '8,5',
      data: '01/09/2026'
    }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Consulta de Avaliações
      </Text>

      {avaliacoes.length === 0 ? (

        <Text style={styles.vazio}>
          Nenhuma avaliação cadastrada.
        </Text>

      ) : (

        avaliacoes.map((avaliacao) => (

          <View style={styles.card} key={avaliacao.id}>

            <Text style={styles.nome}>
              {avaliacao.aluno}
            </Text>

            <Text>Disciplina: {avaliacao.disciplina}</Text>
            <Text>Nota: {avaliacao.nota}</Text>
            <Text>Data: {avaliacao.data}</Text>

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