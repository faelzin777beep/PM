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

export default function TelaCursos({ navigation }) {

  const [nome, setNome] = useState('');
  const [duracao, setDuracao] = useState('');
  const [descricao, setDescricao] = useState('');

  const [cursos, setCursos] = useState([]);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  const cadastrarCurso = () => {

    if (nome === '' || duracao === '' || descricao === '') {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoCurso = {
      nome,
      duracao,
      descricao
    };

    setCursos([...cursos, novoCurso]);

    Alert.alert(
      'Cadastro realizado',
      `Curso ${nome} cadastrado com sucesso!`
    );

    setNome('');
    setDuracao('');
    setDescricao('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Curso
      </Text>

      <Text style={styles.label}>
        Nome do curso
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do curso"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Duração
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 3 anos"
        value={duracao}
        onChangeText={setDuracao}
      />

      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={[styles.input, styles.inputGrande]}
        placeholder="Digite a descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarCurso}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Curso
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => setMostrarConsulta(!mostrarConsulta)}
      >
        <Text style={styles.textoBotao}>
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Cursos'}
        </Text>
      </TouchableOpacity>

      {mostrarConsulta && (
        <View style={styles.consulta}>

          <Text style={styles.tituloConsulta}>
            Cursos Cadastrados
          </Text>

          {cursos.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhum curso cadastrado.
            </Text>
          ) : (
            cursos.map((curso, index) => (

              <View style={styles.card} key={index}>

                <Text style={styles.nome}>
                  {curso.nome}
                </Text>

                <Text>
                  Duração: {curso.duracao}
                </Text>

                <Text>
                  Descrição: {curso.descricao}
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

  inputGrande: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12
  },

  botao: {
    width: '100%',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
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
    color: '#666666',
    textAlign: 'center'
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