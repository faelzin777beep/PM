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

export default function TelaDisciplinas({ navigation }) {

  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [curso, setCurso] = useState('');

  const [disciplinas, setDisciplinas] = useState([]);
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  const cadastrarDisciplina = () => {

    if (
      nome === '' ||
      cargaHoraria === '' ||
      curso === ''
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novaDisciplina = {
      nome,
      cargaHoraria,
      curso
    };

    setDisciplinas([...disciplinas, novaDisciplina]);

    Alert.alert(
      'Cadastro realizado',
      `Disciplina ${nome} cadastrada com sucesso!`
    );

    setNome('');
    setCargaHoraria('');
    setCurso('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastro de Disciplina
      </Text>

      <Text style={styles.label}>
        Nome da disciplina
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da disciplina"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Carga horária
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 80 horas"
        value={cargaHoraria}
        onChangeText={setCargaHoraria}
      />

      <Text style={styles.label}>
        Curso
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarDisciplina}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Disciplina
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => setMostrarConsulta(!mostrarConsulta)}
      >
        <Text style={styles.textoBotao}>
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Disciplinas'}
        </Text>
      </TouchableOpacity>

      {mostrarConsulta && (
        <View style={styles.consulta}>

          <Text style={styles.tituloConsulta}>
            Disciplinas Cadastradas
          </Text>

          {disciplinas.length === 0 ? (
            <Text style={styles.semDados}>
              Nenhuma disciplina cadastrada.
            </Text>
          ) : (
            disciplinas.map((disciplina, index) => (

              <View style={styles.card} key={index}>

                <Text style={styles.nome}>
                  {disciplina.nome}
                </Text>

                <Text>
                  Carga horária: {disciplina.cargaHoraria}
                </Text>

                <Text>
                  Curso: {disciplina.curso}
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