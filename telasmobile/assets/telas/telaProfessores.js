import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

export default function TelaProfessores({ navigation }) {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [formacao, setFormacao] = useState('');
  const [email, setEmail] = useState('');

  const [professores, setProfessores] = useState([]);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  const cadastrarProfessor = () => {

    if (
      nome === '' ||
      cpf === '' ||
      formacao === '' ||
      email === ''
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoProfessor = {
      nome,
      cpf,
      formacao,
      email
    };

    setProfessores([...professores, novoProfessor]);

    Alert.alert(
      'Cadastro realizado',
      `Professor ${nome} cadastrado com sucesso!`
    );

    setNome('');
    setCpf('');
    setFormacao('');
    setEmail('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Professor
      </Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do professor"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>CPF</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Formação</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a formação"
        value={formacao}
        onChangeText={setFormacao}
      />

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarProfessor}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Professor
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => setMostrarConsulta(!mostrarConsulta)}
      >
        <Text style={styles.textoBotao}>
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Professores'}
        </Text>
      </TouchableOpacity>

      {mostrarConsulta && (
        <View style={styles.consulta}>

          <Text style={styles.tituloConsulta}>
            Professores Cadastrados
          </Text>

          {professores.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhum professor cadastrado.
            </Text>
          ) : (
            professores.map((professor, index) => (

              <View style={styles.card} key={index}>

                <Text style={styles.nome}>
                  {professor.nome}
                </Text>

                <Text>CPF: {professor.cpf}</Text>

                <Text>
                  Formação: {professor.formacao}
                </Text>

                <Text>
                  E-mail: {professor.email}
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