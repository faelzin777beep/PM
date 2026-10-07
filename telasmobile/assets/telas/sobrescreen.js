import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.logoBox}><Text style={styles.logo}>🎓</Text></View>
    <Text style={styles.titulo}>APP_SCHOLAR</Text><Text style={styles.subtitulo}>Sistema Acadêmico Escolar</Text><Text style={styles.versao}>Versão 1.0.0</Text>
    <View style={styles.divisor} />
    <Text style={styles.secao}>Sobre o aplicativo</Text><Text style={styles.texto}>O APP_SCHOLAR é um sistema acadêmico para auxiliar escolas na gestão de alunos, professores, turmas, cursos, disciplinas, matrículas, avaliações e boletins.</Text>
    <Text style={styles.secao}>Objetivo</Text><Text style={styles.texto}>Facilitar o gerenciamento das informações acadêmicas, promovendo organização, agilidade e segurança.</Text>
    <Text style={styles.secao}>Tecnologias</Text><Text style={styles.texto}>Desenvolvido com React Native e Expo Go.</Text>
    <View style={styles.rodape}><Text style={styles.rodapeTitulo}>ETEC</Text><Text style={styles.rodapeTexto}>Educação, Tecnologia e Futuro</Text><Text style={styles.copyright}>© 2026 - Todos os direitos reservados.</Text></View>
  </ScrollView>;
}
const styles = StyleSheet.create({
  container:{flexGrow:1,alignItems:'center',padding:24,backgroundColor:'#F7F9FC'}, logoBox:{width:90,height:90,borderRadius:22,backgroundColor:'#123F78',alignItems:'center',justifyContent:'center',marginTop:8},logo:{fontSize:42},titulo:{marginTop:18,fontSize:28,fontWeight:'900',color:'#123F78',letterSpacing:1},subtitulo:{marginTop:5,color:'#475467',fontSize:16},versao:{marginTop:12,color:'#123F78',fontWeight:'800'},divisor:{width:'100%',height:1,backgroundColor:'#DCE4EF',marginVertical:24},secao:{alignSelf:'stretch',color:'#123F78',fontSize:17,fontWeight:'800',marginTop:18,marginBottom:7},texto:{alignSelf:'stretch',color:'#475467',fontSize:15,lineHeight:23},rodape:{alignSelf:'stretch',borderTopWidth:1,borderTopColor:'#DCE4EF',marginTop:28,paddingTop:18,alignItems:'center'},rodapeTitulo:{color:'#123F78',fontSize:18,fontWeight:'900'},rodapeTexto:{color:'#667085',marginTop:4},copyright:{color:'#98A2B3',fontSize:12,marginTop:18},
});
