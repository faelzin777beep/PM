import React, { useState } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  View
} from 'react-native';

export default function TelaBoletins({ navigation }) {

  const [aluno, setAluno] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const [boletins, setBoletins] = useState([]);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  const cadastrarBoletim = () => {

    if (
      aluno === '' ||
      disciplina === '' ||
      nota1 === '' ||
      nota2 === ''
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoBoletim = {
      aluno,
      disciplina,
      nota1,
      nota2
    };

    setBoletins([...boletins, novoBoletim]);

    Alert.alert(
      'Cadastro realizado',
      `Boletim do aluno ${aluno} cadastrado com sucesso!`
    );

    setAluno('');
    setDisciplina('');
    setNota1('');
    setNota2('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Boletim
      </Text>

      <Text style={styles.label}>Aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do aluno"
        value={aluno}
        onChangeText={setAluno}
      />

      <Text style={styles.label}>Disciplina</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <Text style={styles.label}>Nota 1</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Nota 2</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota"
        value={nota2}
        onChangeText={setNota2}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarBoletim}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Boletim
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => setMostrarConsulta(!mostrarConsulta)}
      >
        <Text style={styles.textoBotao}>
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Boletins'}
        </Text>
      </TouchableOpacity>

      {mostrarConsulta && (
        <View style={styles.consulta}>

          <Text style={styles.tituloConsulta}>
            Boletins Cadastrados
          </Text>

          {boletins.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhum boletim cadastrado.
            </Text>
          ) : (
            boletins.map((boletim, index) => (

              <View style={styles.card} key={index}>

                <Text style={styles.nome}>
                  {boletim.aluno}
                </Text>

                <Text>
                  Disciplina: {boletim.disciplina}
                </Text>

                <Text>
                  Nota 1: {boletim.nota1}
                </Text>

                <Text>
                  Nota 2: {boletim.nota2}
                </Text>

              </View>

            ))
          )}

        </View>
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

  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333'
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#F9F9F9'
  },

  botao: {
    width: '100%',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },

  botaoConsulta: {
    width: '100%',
    backgroundColor: '#388E3C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
  },

  botaoVoltar: {
    width: '100%',
    backgroundColor: '#666666',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  consulta: {
    width: '100%',
    marginTop: 25
  },

  tituloConsulta: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 15
  },

  semDados: {
    fontSize: 16,
    color: '#666666'
  },

  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F5F5F5'
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 8
  }

});