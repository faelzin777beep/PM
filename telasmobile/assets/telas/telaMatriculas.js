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

export default function TelaMatriculas({ navigation }) {

  const [aluno, setAluno] = useState('');
  const [curso, setCurso] = useState('');
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');

  const [matriculas, setMatriculas] = useState([]);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  const cadastrarMatricula = () => {

    if (
      aluno === '' ||
      curso === '' ||
      data === '' ||
      status === ''
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novaMatricula = {
      aluno,
      curso,
      data,
      status
    };

    setMatriculas([...matriculas, novaMatricula]);

    Alert.alert(
      'Cadastro realizado',
      `Matrícula do aluno ${aluno} cadastrada com sucesso!`
    );

    setAluno('');
    setCurso('');
    setData('');
    setStatus('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Matrícula
      </Text>

      <Text style={styles.label}>Aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do aluno"
        value={aluno}
        onChangeText={setAluno}
      />

      <Text style={styles.label}>Curso</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o curso"
        value={curso}
        onChangeText={setCurso}
      />

      <Text style={styles.label}>Data da matrícula</Text>

      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.label}>Status</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Ativa"
        value={status}
        onChangeText={setStatus}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarMatricula}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Matrícula
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => setMostrarConsulta(!mostrarConsulta)}
      >
        <Text style={styles.textoBotao}>
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Matrículas'}
        </Text>
      </TouchableOpacity>

      {mostrarConsulta && (
        <View style={styles.consulta}>

          <Text style={styles.tituloConsulta}>
            Matrículas Cadastradas
          </Text>

          {matriculas.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhuma matrícula cadastrada.
            </Text>
          ) : (
            matriculas.map((matricula, index) => (

              <View style={styles.card} key={index}>

                <Text style={styles.nome}>
                  Aluno: {matricula.aluno}
                </Text>

                <Text>
                  Curso: {matricula.curso}
                </Text>

                <Text>
                  Data: {matricula.data}
                </Text>

                <Text>
                  Status: {matricula.status}
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