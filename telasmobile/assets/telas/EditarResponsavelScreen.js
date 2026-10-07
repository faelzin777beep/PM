import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const exemploInicial = {'id': 'responsavel-exemplo', 'nome': 'Ana Beatriz Santos', 'cpf': '123.456.789-10', 'rg': '45.678.123-4', 'telefone': '(12) 99123-4567', 'email': 'ana.beatriz@email.com', 'parentesco': 'Mãe', 'endereco': 'Rua das Flores, 123 - Jardim América', 'observacoes': 'Responsável principal.'};

export default function EditarResponsavelScreen({ navigation, route }) {
  const itemInicial = route?.params?.item || exemploInicial;
  const [nome, setNome] = useState(itemInicial.nome || '');
  const [cpf, setCpf] = useState(itemInicial.cpf || '');
  const [rg, setRg] = useState(itemInicial.rg || '');
  const [telefone, setTelefone] = useState(itemInicial.telefone || '');
  const [email, setEmail] = useState(itemInicial.email || '');
  const [parentesco, setParentesco] = useState(itemInicial.parentesco || '');
  const [endereco, setEndereco] = useState(itemInicial.endereco || '');
  const [observacoes, setObservacoes] = useState(itemInicial.observacoes || '');

  useEffect(() => {
    const itemAtualizado = route?.params?.item || exemploInicial;
    setNome(itemAtualizado.nome || '');
    setCpf(itemAtualizado.cpf || '');
    setRg(itemAtualizado.rg || '');
    setTelefone(itemAtualizado.telefone || '');
    setEmail(itemAtualizado.email || '');
    setParentesco(itemAtualizado.parentesco || '');
    setEndereco(itemAtualizado.endereco || '');
    setObservacoes(itemAtualizado.observacoes || '');
  }, [route?.params?.item]);

  const salvar = () => {
    if (!nome.trim() || !cpf.trim() || !telefone.trim() || !parentesco.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    const itemAtualizado = { ...itemInicial, id: itemInicial.id || Date.now().toString(),
      nome,
      cpf,
      rg,
      telefone,
      email,
      parentesco,
      endereco,
      observacoes,
    };
    route?.params?.onSave?.(itemAtualizado);
    Alert.alert('Sucesso', 'Responsável atualizado com sucesso!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  const excluir = () => Alert.alert('Confirmar exclusão', 'Deseja excluir este registro?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: () => { route?.params?.onDelete?.(itemInicial.id); navigation.goBack(); } },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.cabecalho}>
        <View><Text style={styles.titulo}>Editar Responsável</Text><Text style={styles.subtitulo}>Atualize os dados e toque em salvar.</Text></View>
        <TouchableOpacity style={styles.botaoExcluirTopo} onPress={excluir}><Text style={styles.iconeExcluir}>🗑</Text></TouchableOpacity>
      </View>
      <View style={styles.linhaTitulo} />
      <Text style={styles.secao}>Dados do Responsável</Text>

        <Text style={styles.label}>Nome completo*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <Text style={styles.label}>RG (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o RG"
          value={rg}
          onChangeText={setRg}
        />
        <Text style={styles.label}>Telefone*</Text>
        <TextInput
          style={styles.input}
          placeholder="(12) 99999-9999"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>E-mail (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Parentesco*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Mãe"
          value={parentesco}
          onChangeText={setParentesco}
        />
        <Text style={styles.label}>Endereço (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <Text style={styles.label}>Observações (opcional)</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Digite observações, se necessário..."
          value={observacoes}
          onChangeText={setObservacoes}
          multiline
          numberOfLines={4}
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
