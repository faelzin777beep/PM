import React, { createContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TELAS DE CADASTRO
import CadastroAlunoScreen from './assets/telas/telaAlunos';
import CadastroProfessorScreen from './assets/telas/telaProfessores';
import CadastroTurmaScreen from './assets/telas/telaTurmas';
import CadastroCursoScreen from './assets/telas/telaCursos';
import CadastroDisciplinaScreen from './assets/telas/telaDisciplinas';
import CadastroMatriculaScreen from './assets/telas/telaMatriculas';
import CadastroResponsavelScreen from './assets/telas/telaResponsaveis';
import CadastroAvaliacaoScreen from './assets/telas/telaAvaliacoes';
import CadastroCoordenadorScreen from './assets/telas/telaCoordenadores';
import CadastroBoletimScreen from './assets/telas/telaBoletins';

// TELAS DE CONSULTA
import ConsultaAlunosScreen from './assets/telas/consultaAluno';
import ConsultaProfessoresScreen from './assets/telas/consultaProfessor';
import ConsultaTurmasScreen from './assets/telas/consultaTurma';
import ConsultaCursosScreen from './assets/telas/consultaCurso';
import ConsultaDisciplinasScreen from './assets/telas/consultaDisciplina';
import ConsultaMatriculasScreen from './assets/telas/consultaMatricula';
import ConsultaResponsaveisScreen from './assets/telas/consultaResponsavel';
import ConsultaAvaliacoesScreen from './assets/telas/consultaAvaliacao';
import ConsultaCoordenadoresScreen from './assets/telas/consultaCoordenador';
import ConsultaBoletinsScreen from './assets/telas/consultaBoletim';

// TELA SOBRE
import SobreScreen from './assets/telas/sobrescreen';

// TELAS DE EDIÇÃO
import EditarAlunoScreen from './assets/telas/EditarAlunoScreen';
import EditarProfessorScreen from './assets/telas/EditarProfessorScreen';
import EditarTurmaScreen from './assets/telas/EditarTurmaScreen';
import EditarCursoScreen from './assets/telas/EditarCursoScreen';
import EditarDisciplinaScreen from './assets/telas/EditarDisciplinaScreen';
import EditarMatriculaScreen from './assets/telas/EditarMatriculaScreen';
import EditarResponsavelScreen from './assets/telas/EditarResponsavelScreen';
import EditarAvaliacaoScreen from './assets/telas/EditarAvaliacaoScreen';
import EditarCoordenadorScreen from './assets/telas/EditarCoordenadorScreen';
import EditarBoletimScreen from './assets/telas/EditarBoletimScreen';

export const AppContext = createContext();

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const modulos = [
    {
      nome: 'Alunos',
      cadastro: 'CadastroAluno',
      consulta: 'ConsultaAlunos',
    },
    {
      nome: 'Professores',
      cadastro: 'CadastroProfessor',
      consulta: 'ConsultaProfessores',
    },
    {
      nome: 'Turmas',
      cadastro: 'CadastroTurma',
      consulta: 'ConsultaTurmas',
    },
    {
      nome: 'Cursos',
      cadastro: 'CadastroCurso',
      consulta: 'ConsultaCursos',
    },
    {
      nome: 'Disciplinas',
      cadastro: 'CadastroDisciplina',
      consulta: 'ConsultaDisciplinas',
    },
    {
      nome: 'Matrículas',
      cadastro: 'CadastroMatricula',
      consulta: 'ConsultaMatriculas',
    },
    {
      nome: 'Responsáveis',
      cadastro: 'CadastroResponsavel',
      consulta: 'ConsultaResponsaveis',
    },
    {
      nome: 'Avaliações',
      cadastro: 'CadastroAvaliacao',
      consulta: 'ConsultaAvaliacoes',
    },
    {
      nome: 'Coordenadores',
      cadastro: 'CadastroCoordenador',
      consulta: 'ConsultaCoordenadores',
    },
    {
      nome: 'Boletins',
      cadastro: 'CadastroBoletim',
      consulta: 'ConsultaBoletins',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./components/images.jpg')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        APP Scholar
      </Text>

      <Text style={styles.subtitulo}>
        Sistema Acadêmico Mobile
      </Text>

      {modulos.map((item, index) => (
        <View
          key={index}
          style={styles.cardModulo}
        >
          <Text style={styles.tituloModulo}>
            {item.nome}
          </Text>

          <View style={styles.boxBotoes}>
            <TouchableOpacity
              style={[
                styles.botao,
                styles.btnCadastro,
              ]}
              onPress={() =>
                navigation.navigate(item.cadastro)
              }
            >
              <Text style={styles.textoBotao}>
                Cadastrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.botao,
                styles.btnConsulta,
              ]}
              onPress={() =>
                navigation.navigate(item.consulta)
              }
            >
              <Text style={styles.textoBotao}>
                Consultar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.sobreButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.sobreButtonText}>
          Sobre o aplicativo
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [matriculas, setMatriculas] = useState([]);
  const [responsaveis, setResponsaveis] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [coordenadores, setCoordenadores] = useState([]);
  const [boletins, setBoletins] = useState([]);

  const excluirItem = (entidade, id) => {
    if (entidade === 'alunos') {
      setAlunos((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'professores') {
      setProfessores((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'turmas') {
      setTurmas((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'cursos') {
      setCursos((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'disciplinas') {
      setDisciplinas((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'matriculas') {
      setMatriculas((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'responsaveis') {
      setResponsaveis((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'avaliacoes') {
      setAvaliacoes((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'coordenadores') {
      setCoordenadores((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }

    if (entidade === 'boletins') {
      setBoletins((lista) =>
        lista.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        alunos,
        setAlunos,

        professores,
        setProfessores,

        turmas,
        setTurmas,

        cursos,
        setCursos,

        disciplinas,
        setDisciplinas,

        matriculas,
        setMatriculas,

        responsaveis,
        setResponsaveis,

        avaliacoes,
        setAvaliacoes,

        coordenadores,
        setCoordenadores,

        boletins,
        setBoletins,

        excluirItem,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1565C0',
            },
            headerTintColor: '#FFFFFF',
          }}
        >
          {/* HOME E SOBRE */}
          <Stack.Screen
            name="Inicio"
            component={HomeScreen}
            options={{
              title: 'Menu App Scholar',
            }}
          />

          <Stack.Screen
            name="Sobre"
            component={SobreScreen}
            options={{
              title: 'Sobre o aplicativo',
            }}
          />

          {/* TELAS DE CADASTRO */}
          <Stack.Screen
            name="CadastroAluno"
            component={CadastroAlunoScreen}
            options={{
              title: 'Cadastrar Aluno',
            }}
          />

          <Stack.Screen
            name="CadastroProfessor"
            component={CadastroProfessorScreen}
            options={{
              title: 'Cadastrar Professor',
            }}
          />

          <Stack.Screen
            name="CadastroTurma"
            component={CadastroTurmaScreen}
            options={{
              title: 'Cadastrar Turma',
            }}
          />

          <Stack.Screen
            name="CadastroCurso"
            component={CadastroCursoScreen}
            options={{
              title: 'Cadastrar Curso',
            }}
          />

          <Stack.Screen
            name="CadastroDisciplina"
            component={CadastroDisciplinaScreen}
            options={{
              title: 'Cadastrar Disciplina',
            }}
          />

          <Stack.Screen
            name="CadastroMatricula"
            component={CadastroMatriculaScreen}
            options={{
              title: 'Cadastrar Matrícula',
            }}
          />

          <Stack.Screen
            name="CadastroResponsavel"
            component={CadastroResponsavelScreen}
            options={{
              title: 'Cadastrar Responsável',
            }}
          />

          <Stack.Screen
            name="CadastroAvaliacao"
            component={CadastroAvaliacaoScreen}
            options={{
              title: 'Cadastrar Avaliação',
            }}
          />

          <Stack.Screen
            name="CadastroCoordenador"
            component={CadastroCoordenadorScreen}
            options={{
              title: 'Cadastrar Coordenador',
            }}
          />

          <Stack.Screen
            name="CadastroBoletim"
            component={CadastroBoletimScreen}
            options={{
              title: 'Cadastrar Boletim',
            }}
          />

          {/* TELAS DE CONSULTA */}
          <Stack.Screen
            name="ConsultaAlunos"
            component={ConsultaAlunosScreen}
            options={{
              title: 'Consultar Alunos',
            }}
          />

          <Stack.Screen
            name="ConsultaProfessores"
            component={ConsultaProfessoresScreen}
            options={{
              title: 'Consultar Professores',
            }}
          />

          <Stack.Screen
            name="ConsultaTurmas"
            component={ConsultaTurmasScreen}
            options={{
              title: 'Consultar Turmas',
            }}
          />

          <Stack.Screen
            name="ConsultaCursos"
            component={ConsultaCursosScreen}
            options={{
              title: 'Consultar Cursos',
            }}
          />

          <Stack.Screen
            name="ConsultaDisciplinas"
            component={ConsultaDisciplinasScreen}
            options={{
              title: 'Consultar Disciplinas',
            }}
          />

          <Stack.Screen
            name="ConsultaMatriculas"
            component={ConsultaMatriculasScreen}
            options={{
              title: 'Consultar Matrículas',
            }}
          />

          <Stack.Screen
            name="ConsultaResponsaveis"
            component={ConsultaResponsaveisScreen}
            options={{
              title: 'Consultar Responsáveis',
            }}
          />

          <Stack.Screen
            name="ConsultaAvaliacoes"
            component={ConsultaAvaliacoesScreen}
            options={{
              title: 'Consultar Avaliações',
            }}
          />

          <Stack.Screen
            name="ConsultaCoordenadores"
            component={ConsultaCoordenadoresScreen}
            options={{
              title: 'Consultar Coordenadores',
            }}
          />

          <Stack.Screen
            name="ConsultaBoletins"
            component={ConsultaBoletinsScreen}
            options={{
              title: 'Consultar Boletins',
            }}
          />
  
          {/* TELAS DE EDIÇÃO */}
          <Stack.Screen
            name="EditarAluno"
            component={EditarAlunoScreen}
            options={{
              title: 'Editar Aluno',
            }}
          />

          <Stack.Screen
            name="EditarProfessor"
            component={EditarProfessorScreen}
            options={{
              title: 'Editar Professor',
            }}
          />

          <Stack.Screen
            name="EditarTurma"
            component={EditarTurmaScreen}
            options={{
              title: 'Editar Turma',
            }}
          />

          <Stack.Screen
            name="EditarCurso"
            component={EditarCursoScreen}
            options={{
              title: 'Editar Curso',
            }}
          />

          <Stack.Screen
            name="EditarDisciplina"
            component={EditarDisciplinaScreen}
            options={{
              title: 'Editar Disciplina',
            }}
          />

          <Stack.Screen
            name="EditarMatricula"
            component={EditarMatriculaScreen}
            options={{
              title: 'Editar Matrícula',
            }}
          />

          <Stack.Screen
            name="EditarResponsavel"
            component={EditarResponsavelScreen}
            options={{
              title: 'Editar Responsável',
            }}
          />

          <Stack.Screen
            name="EditarAvaliacao"
            component={EditarAvaliacaoScreen}
            options={{
              title: 'Editar Avaliação',
            }}
          />

          <Stack.Screen
            name="EditarCoordenador"
            component={EditarCoordenadorScreen}
            options={{
              title: 'Editar Coordenador',
            }}
          />

          <Stack.Screen
            name="EditarBoletim"
            component={EditarBoletimScreen}
            options={{
              title: 'Editar Boletim',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 25,
    color: '#666666',
  },

  cardModulo: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },

  tituloModulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },

  boxBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botao: {
    width: '48%',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },

  btnCadastro: {
    backgroundColor: '#1976D2',
  },

  btnConsulta: {
    backgroundColor: '#388E3C',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  sobreButton: {
    marginTop: 4,
    marginBottom: 18,
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1565C0',
  },

  sobreButtonText: {
    color: '#1565C0',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
