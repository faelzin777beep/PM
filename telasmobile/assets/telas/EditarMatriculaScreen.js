import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const exemploInicial = {'id': 'matricula-exemplo', 'aluno': 'João Pedro Silva', 'turma': '2º Ano A', 'curso': 'Ensino Médio', 'data': '15/01/2026', 'anoLetivo': '2026', 'status': 'Ativa', 'observacoes': ''};

export default function EditarMatriculaScreen({ navigation, route }) {
  const itemInicial = route?.params?.item || exemploInicial;
  const [aluno, setAluno] = useState(itemInicial.aluno || '');
  const [turma, setTurma] = useState(itemInicial.turma || '');
  const [curso, setCurso] = useState(itemInicial.curso || '');
  const [data, setData] = useState(itemInicial.data || '');
  const [anoLetivo, setAnoLetivo] = useState(itemInicial.anoLetivo || '');
  const [status, setStatus] = useState(itemInicial.status || '');
  const [observacoes, setObservacoes] = useState(itemInicial.observacoes || '');

  useEffect(() => {
    const itemAtualizado = route?.params?.item || exemploInicial;
    setAluno(itemAtualizado.aluno || '');
    setTurma(itemAtualizado.turma || '');
    setCurso(itemAtualizado.curso || '');
    setData(itemAtualizado.data || '');
    setAnoLetivo(itemAtualizado.anoLetivo || '');
    setStatus(itemAtualizado.status || '');
    setObservacoes(itemAtualizado.observacoes || '');
  }, [route?.params?.item]);

  const salvar = () => {
    if (!aluno.trim() || !turma.trim() || !curso.trim() || !data.trim() || !anoLetivo.trim() || !status.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    const itemAtualizado = { ...itemInicial, id: itemInicial.id || Date.now().toString(),
      aluno,
      turma,
      curso,
      data,
      anoLetivo,
      status,
      observacoes,
    };
    route?.params?.onSave?.(itemAtualizado);
    Alert.alert('Sucesso', 'Matrícula atualizado com sucesso!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  const excluir = () => Alert.alert('Confirmar exclusão', 'Deseja excluir este registro?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: () => { route?.params?.onDelete?.(itemInicial.id); navigation.goBack(); } },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.cabecalho}>
        <View><Text style={styles.titulo}>Editar Matrícula</Text><Text style={styles.subtitulo}>Atualize os dados e toque em salvar.</Text></View>
        <TouchableOpacity style={styles.botaoExcluirTopo} onPress={excluir}><Text style={styles.iconeExcluir}>🗑</Text></TouchableOpacity>
      </View>
      <View style={styles.linhaTitulo} />
      <Text style={styles.secao}>Dados do Matrícula</Text>

        <Text style={styles.label}>Aluno*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o aluno"
          value={aluno}
          onChangeText={setAluno}
        />
        <Text style={styles.label}>Turma*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a turma"
          value={turma}
          onChangeText={setTurma}
        />
        <Text style={styles.label}>Curso*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o curso"
          value={curso}
          onChangeText={setCurso}
        />
        <Text style={styles.label}>Data da matrícula*</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={data}
          onChangeText={setData}
        />
        <Text style={styles.label}>Ano letivo*</Text>
        <TextInput
          style={styles.input}
          placeholder="2026"
          value={anoLetivo}
          onChangeText={setAnoLetivo}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Situação*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ativa"
          value={status}
          onChangeText={setStatus}
        />
        <Text style={styles.label}>Observações</Text>
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
