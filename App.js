import react from 'react';
import { StyleSheet, View } from 'react-native';

import Titulo from './componentes/titulo/titulo';
import Conteudo from './componentes/conteudo/conteudo';
import Card from './componentes/Card/card';

export default function App() {
  return (
    <View style={stylesglobal.container}>
    <Titulo></Titulo>
    <Conteudo></Conteudo>
    <Card></Card>
    </View>
  );
}

const stylesglobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
