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

// Criamos uma lista compartilhada fora do componente para os arquivos conversarem
export let listaAlunosCompartilhada = [];

export default function TelaAlunos({ navigation }) {   
  const [nome, setNome] = useState('');   
  const [cpf, setCpf] = useState('');   
  const [dataNascimento, setDataNascimento] = useState('');   
  const [email, setEmail] = useState('');   
  const [alunos, setAlunos] = useState(listaAlunosCompartilhada);   
  const [mostrarConsulta, setMostrarConsulta] = useState(false);   

  const cadastrarAluno = () => {     
    if (nome === '' || cpf === '' || dataNascimento === '' || email === '') {       
      Alert.alert('Atenção', 'Preencha todos os campos.');       
      return;     
    }     
    const novoAluno = {       
      id: Date.now().toString(),
      nome: nome,       
      cpf: cpf,       
      dataNascimento: dataNascimento,       
      email: email     
    };     
    
    const novaLista = [...alunos, novoAluno];
    setAlunos(novaLista);     
    listaAlunosCompartilhada = novaLista; // Atualiza a lista que o outro arquivo vai ler

    Alert.alert(       
      'Cadastro realizado',       
      `Aluno ${nome} cadastrado com sucesso!`     
    );     
    setNome('');     
    setCpf('');     
    setDataNascimento('');     
    setEmail('');   
  };   

  const apagarAluno = (indexParaRemover) => {
    const novaLista = alunos.filter((_, index) => index !== indexParaRemover);
    setAlunos(novaLista);
    listaAlunosCompartilhada = novaLista;
    Alert.alert('Sucesso', 'Aluno removido da lista.');
  };

  return (     
    <ScrollView contentContainerStyle={styles.container}>       
      <Text style={styles.titulo}>Cadastro de Aluno</Text>       
      
      <Text style={styles.label}>Nome</Text>       
      <TextInput style={styles.input} placeholder="Digite o nome do aluno" value={nome} onChangeText={setNome} />       
      
      <Text style={styles.label}>CPF</Text>       
      <TextInput style={styles.input} placeholder="Digite o CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />       
      
      <Text style={styles.label}>Data de nascimento</Text>       
      <TextInput style={styles.input} placeholder="DD/MM/AAAA" value={dataNascimento} onChangeText={setDataNascimento} />       
      
      <Text style={styles.label}>E-mail</Text>       
      <TextInput style={styles.input} placeholder="Digite o e-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />       
      
      <TouchableOpacity style={styles.botao} onPress={cadastrarAluno}>         
        <Text style={styles.textoBotao}>Cadastrar Aluno</Text>       
      </TouchableOpacity>       
      
      <TouchableOpacity style={styles.botaoConsulta} onPress={() => setMostrarConsulta(!mostrarConsulta)}>         
        <Text style={styles.textoBotao}>           
          {mostrarConsulta ? 'Ocultar Consulta' : 'Consultar Alunos'}         
        </Text>       
      </TouchableOpacity>       
      
      {mostrarConsulta && (         
        <View style={styles.consulta}>           
          <Text style={styles.tituloConsulta}>Alunos Cadastrados</Text>           
          {alunos.length === 0 ? (             
            <Text style={styles.semDados}>Nenhum aluno cadastrado temporariamente.</Text>
          ) : (             
            alunos.map((aluno, index) => (               
              <View style={styles.card} key={index}>                 
                <Text style={styles.nomeAluno}>{aluno.nome}</Text>                 
                <Text>CPF: {aluno.cpf}</Text>                 
                <Text>Nascimento: {aluno.dataNascimento}</Text>                 
                <Text>E-mail: {aluno.email}</Text>               
                
                <TouchableOpacity 
                  style={{ backgroundColor: '#D32F2F', padding: 8, borderRadius: 5, marginTop: 10, alignItems: 'center' }}
                  onPress={() => apagarAluno(index)}
                >
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>Apagar</Text>
                </TouchableOpacity>
              </View>             
            ))           
          )}         
        </View>       
      )}       
      
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Inicio')}>         
        <Text style={styles.textoBotao}>Voltar para o início</Text>       
      </TouchableOpacity>     
    </ScrollView>   
  ); 
}

const styles = StyleSheet.create({   
  container: { flexGrow: 1, padding: 20, backgroundColor: '#FFFFFF' },   
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1565C0', textAlign: 'center', marginBottom: 30 },   
  label: { fontSize: 17, fontWeight: 'bold', marginBottom: 8, color: '#333333' },   
  input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 8, paddingHorizontal: 15, marginBottom: 20, fontSize: 16, backgroundColor: '#F9F9F9' },   
  botao: { width: '100%', backgroundColor: '#1976D2', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },   
  botaoConsulta: { width: '100%', backgroundColor: '#388E3C', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 15 },   
  botaoVoltar: { width: '100%', backgroundColor: '#666666', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 15 },   
  textoBotao: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },   
  consulta: { width: '100%', marginTop: 25 },   
  tituloConsulta: { fontSize: 22, fontWeight: 'bold', color: '#1565C0', marginBottom: 15 },   
  semDados: { fontSize: 16, color: '#666666', textAlign: 'center', marginBottom: 15 },   
  card: { width: '100%', borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, padding: 15, marginBottom: 15, backgroundColor: '#F5F5F5' },   
  nomeAluno: { fontSize: 20, fontWeight: 'bold', color: '#1565C0', marginBottom: 8 }
});
