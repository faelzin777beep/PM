import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const exemploInicial = {'id': 'boletim-exemplo', 'aluno': 'João Pedro Silva', 'turma': '2º Ano A', 'periodo': '1º Bimestre / 2026', 'dataEmissao': '25/05/2026', 'nota1': '8,0', 'nota2': '9,0', 'media': '8,5', 'observacoes': 'Aluno participa ativamente das aulas.'};

export default function EditarBoletimScreen({ navigation, route }) {
  const itemInicial = route?.params?.item || exemploInicial;
  const [aluno, setAluno] = useState(itemInicial.aluno || '');
  const [turma, setTurma] = useState(itemInicial.turma || '');
  const [periodo, setPeriodo] = useState(itemInicial.periodo || '');
  const [dataEmissao, setDataEmissao] = useState(itemInicial.dataEmissao || '');
  const [nota1, setNota1] = useState(itemInicial.nota1 || '');
  const [nota2, setNota2] = useState(itemInicial.nota2 || '');
  const [media, setMedia] = useState(itemInicial.media || '');
  const [observacoes, setObservacoes] = useState(itemInicial.observacoes || '');

  useEffect(() => {
    const itemAtualizado = route?.params?.item || exemploInicial;
    setAluno(itemAtualizado.aluno || '');
    setTurma(itemAtualizado.turma || '');
    setPeriodo(itemAtualizado.periodo || '');
    setDataEmissao(itemAtualizado.dataEmissao || '');
    setNota1(itemAtualizado.nota1 || '');
    setNota2(itemAtualizado.nota2 || '');
    setMedia(itemAtualizado.media || '');
    setObservacoes(itemAtualizado.observacoes || '');
  }, [route?.params?.item]);

  const salvar = () => {
    if (!aluno.trim() || !turma.trim() || !periodo.trim() || !dataEmissao.trim() || !nota1.trim() || !nota2.trim() || !media.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    const itemAtualizado = { ...itemInicial, id: itemInicial.id || Date.now().toString(),
      aluno,
      turma,
      periodo,
      dataEmissao,
      nota1,
      nota2,
      media,
      observacoes,
    };
    route?.params?.onSave?.(itemAtualizado);
    Alert.alert('Sucesso', 'Boletim atualizado com sucesso!', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  const excluir = () => Alert.alert('Confirmar exclusão', 'Deseja excluir este registro?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Excluir', style: 'destructive', onPress: () => { route?.params?.onDelete?.(itemInicial.id); navigation.goBack(); } },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.cabecalho}>
        <View><Text style={styles.titulo}>Editar Boletim</Text><Text style={styles.subtitulo}>Atualize os dados e toque em salvar.</Text></View>
        <TouchableOpacity style={styles.botaoExcluirTopo} onPress={excluir}><Text style={styles.iconeExcluir}>🗑</Text></TouchableOpacity>
      </View>
      <View style={styles.linhaTitulo} />
      <Text style={styles.secao}>Dados do Boletim</Text>

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
        <Text style={styles.label}>Período*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 1º Bimestre / 2026"
          value={periodo}
          onChangeText={setPeriodo}
        />
        <Text style={styles.label}>Data de emissão*</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={dataEmissao}
          onChangeText={setDataEmissao}
        />
        <Text style={styles.label}>Nota 1*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 8,0"
          value={nota1}
          onChangeText={setNota1}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Nota 2*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 9,0"
          value={nota2}
          onChangeText={setNota2}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Média geral*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 8,5"
          value={media}
          onChangeText={setMedia}
          keyboardType="numeric"
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
