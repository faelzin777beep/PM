import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const exemploInicial = {'id': 'curso-exemplo', 'nome': 'Informática para Internet', 'area': 'Tecnologia da Informação', 'descricao': 'Curso voltado à formação de profissionais para desenvolvimento e gestão de soluções para a internet.', 'duracao': '3 anos', 'cargaHoraria': '2400', 'modalidade': 'Presencial', 'status': 'Ativo'};

export default function EditarCursoScreen({ navigation, route }) {
  const itemInicial = route?.params?.item || exemploInicial;
  const [nome, setNome] = useState(itemInicial.nome || '');
  const [area, setArea] = useState(itemInicial.area || '');
  const [descricao, setDescricao] = useState(itemInicial.descricao || '');
  const [duracao, setDuracao] = useState(itemInicial.duracao || '');
  const [cargaHoraria, setCargaHoraria] = useState(itemInicial.cargaHoraria || '');
  const [modalidade, setModalidade] = useState(itemInicial.modalidade || '');
  const [status, setStatus] = useState(itemInicial.status || '');

  useEffect(() => {
    const itemAtualizado = route?.params?.item || exemploInicial;
    setNome(itemAtualizado.nome || '');
    setArea(itemAtualizado.area || '');
    setDescricao(itemAtualizado.descricao || '');
    setDuracao(itemAtualizado.duracao || '');
    setCargaHoraria(itemAtualizado.cargaHoraria || '');
    setModalidade(itemAtualizado.modalidade || '');
    setStatus(itemAtualizado.status || '');
  }, [route?.params?.item]);

  const salvar = () => {
    if (!nome.trim() || !area.trim() || !duracao.trim() || !cargaHoraria.trim() || !modalidade.trim() || !status.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    const itemAtualizado = { ...itemInicial, id: itemInicial.id || Date.now().toString(),
      nome,
      area,
      descricao,
      duracao,
      cargaHoraria,
      modalidade,
      status,
    };
    route?.params?.onSave?.(itemAtualizado);
    Alert.alert('Sucesso', 'Curso atualizado com sucesso!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  const excluir = () => Alert.alert('Confirmar exclusão', 'Deseja excluir este registro?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: () => { route?.params?.onDelete?.(itemInicial.id); navigation.goBack(); } },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.cabecalho}>
        <View><Text style={styles.titulo}>Editar Curso</Text><Text style={styles.subtitulo}>Atualize os dados e toque em salvar.</Text></View>
        <TouchableOpacity style={styles.botaoExcluirTopo} onPress={excluir}><Text style={styles.iconeExcluir}>🗑</Text></TouchableOpacity>
      </View>
      <View style={styles.linhaTitulo} />
      <Text style={styles.secao}>Dados do Curso</Text>

        <Text style={styles.label}>Nome do curso*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do curso"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Área*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Tecnologia da Informação"
          value={area}
          onChangeText={setArea}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Digite uma descrição para o curso..."
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />
        <Text style={styles.label}>Duração*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 3 anos"
          value={duracao}
          onChangeText={setDuracao}
        />
        <Text style={styles.label}>Carga horária (horas)*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 2400"
          value={cargaHoraria}
          onChangeText={setCargaHoraria}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Modalidade*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Presencial"
          value={modalidade}
          onChangeText={setModalidade}
        />
        <Text style={styles.label}>Status*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Ativo"
          value={status}
          onChangeText={setStatus}
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
