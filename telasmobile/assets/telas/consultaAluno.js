import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AppContext } from '../../App'; // Certifique-se de que o caminho até o App.js está correto

export default function ConsultaAluno({ navigation }) {
    // Consome os dados e a função de exclusão do contexto global
    const { alunos, excluirItem } = useContext(AppContext);

    const handleExcluir = (id, nome) => {
        Alert.alert(
            "Confirmar Exclusão",
            `Tem certeza que deseja remover o(a) aluno(a) ${nome}?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive", onPress: () => excluirItem('alunos', id) }
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Consulta de Alunos</Text>

            {alunos.length === 0 ? (
                <Text style={styles.vazio}>Nenhum aluno cadastrado no banco de dados.</Text>
            ) : (
                alunos.map((aluno) => (
                    <View style={styles.card} key={aluno.id}>
                        <Text style={styles.nome}>{aluno.nome}</Text>
                        <Text>CPF: {aluno.cpf}</Text>
                        <Text>Data de nascimento: {aluno.dataNascimento}</Text>
                        <Text>E-mail: {aluno.email}</Text>
                        
                        <TouchableOpacity 
                            style={styles.botaoExcluir} 
                            onPress={() => handleExcluir(aluno.id, aluno.nome)}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                ))
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
    card: { width: '100%', padding: 18, backgroundColor: '#F2F7FC', borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#D0D0D0' },
    nome: { fontSize: 20, fontWeight: 'bold', color: '#1565C0', marginBottom: 10 },
    vazio: { textAlign: 'center', fontSize: 17, color: '#666666', marginTop: 20 },
    botaoExcluir: { backgroundColor: '#D32F2F', padding: 10, borderRadius: 8, marginTop: 15, alignItems: 'center' },
    botaoVoltar: { width: '100%', backgroundColor: '#666666', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
    textoBotao: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }
});
