import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const exemploInicial = {'id': 'professor-exemplo', 'nome': 'Carlos Eduardo Lima', 'dataNascimento': '12/05/1985', 'cpf': '123.456.789-00', 'email': 'carlos.lima@escola.com.br', 'formacao': 'Licenciatura em Matemática'};

export default function EditarProfessorScreen({ navigation, route }) {
  const itemInicial = route?.params?.item || exemploInicial;
  const [nome, setNome] = useState(itemInicial.nome || '');
  const [dataNascimento, setDataNascimento] = useState(itemInicial.dataNascimento || '');
  const [cpf, setCpf] = useState(itemInicial.cpf || '');
  const [email, setEmail] = useState(itemInicial.email || '');
  const [formacao, setFormacao] = useState(itemInicial.formacao || '');

  useEffect(() => {
    const itemAtualizado = route?.params?.item || exemploInicial;
    setNome(itemAtualizado.nome || '');
    setDataNascimento(itemAtualizado.dataNascimento || '');
    setCpf(itemAtualizado.cpf || '');
    setEmail(itemAtualizado.email || '');
    setFormacao(itemAtualizado.formacao || '');
  }, [route?.params?.item]);

  const salvar = () => {
    if (!nome.trim() || !dataNascimento.trim() || !cpf.trim() || !email.trim() || !formacao.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    const itemAtualizado = { ...itemInicial, id: itemInicial.id || Date.now().toString(),
      nome,
      dataNascimento,
      cpf,
      email,
      formacao,
    };
    route?.params?.onSave?.(itemAtualizado);
    Alert.alert('Sucesso', 'Professor atualizado com sucesso!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  const excluir = () => Alert.alert('Confirmar exclusão', 'Deseja excluir este registro?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: () => { route?.params?.onDelete?.(itemInicial.id); navigation.goBack(); } },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.cabecalho}>
        <View><Text style={styles.titulo}>Editar Professor</Text><Text style={styles.subtitulo}>Atualize os dados e toque em salvar.</Text></View>
        <TouchableOpacity style={styles.botaoExcluirTopo} onPress={excluir}><Text style={styles.iconeExcluir}>🗑</Text></TouchableOpacity>
      </View>
      <View style={styles.linhaTitulo} />
      <Text style={styles.secao}>Dados do Professor</Text>

        <Text style={styles.label}>Nome completo*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Data de nascimento*</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Formação*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a formação"
          value={formacao}
          onChangeText={setFormacao}
        />

      <View style={styles.acoes}>
        <TouchableOpacity style={[styles.botao, styles.botaoCancelar]} onPress={() => navigation.goBack()}><Text style={styles.textoCancelar}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.botaoSalvar]} onPress={salvar}><Text style={styles.textoSalvar}>Salvar</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F7F9FC' },
  cabecalho: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  titulo: { fontSize: 25, fontWeight: '800', color: '#123F78' }, subtitulo: { color: '#667085', marginTop: 5, fontSize: 14 },
  botaoExcluirTopo: { minWidth: 44, minHeight: 44, borderRadius: 10, backgroundColor: '#FDECEC', alignItems: 'center', justifyContent: 'center' }, iconeExcluir: { fontSize: 18 },
  linhaTitulo: { height: 1, backgroundColor: '#DCE4EF', marginVertical: 18 }, secao: { fontSize: 18, fontWeight: '800', color: '#123F78', marginBottom: 14 },
  label: { fontSize: 14, fontWeight: '700', color: '#344054', marginBottom: 6, marginTop: 12 }, input: { minHeight: 48, borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 10, backgroundColor: '#FFFFFF', paddingHorizontal: 14, color: '#172B4D', fontSize: 15 },
  textarea: { minHeight: 96, borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 10, backgroundColor: '#FFFFFF', paddingHorizontal: 14, paddingTop: 12, color: '#172B4D', fontSize: 15, textAlignVertical: 'top' },
  acoes: { flexDirection: 'row', gap: 12, marginTop: 24, marginBottom: 10 }, botao: { flex: 1, minHeight: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }, botaoCancelar: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#123F78' }, botaoSalvar: { backgroundColor: '#123F78' }, textoCancelar: { color: '#123F78', fontWeight: '800', fontSize: 15 }, textoSalvar: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
});
