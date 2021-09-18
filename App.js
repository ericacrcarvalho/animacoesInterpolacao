import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const App = () => {
 
  const [largura] = useState(new Animated.Value(0));
  const [rotacao] = useState(new Animated.Value(0));

  Animated.timing(largura, {toValue:80, duration:2000}).start();
  Animated.timing(rotacao, {toValue:90, duration:2500}).start();

  let larguraInterpolada = largura.interpolate({
    inputRange: [0, 80],
    outputRange: ['0%', '80%'],
  });

  let rotacaoInterpolada = rotacao.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Interpolação</Text>
      <Animated.View
        style={{width:larguraInterpolada, height:20, backgroundColor:'blue'}}
      ></Animated.View>
      <Animated.Text
        style={{fontSize: 22, margin: 70, fontWeight:'bold', transform:[{rotate:rotacaoInterpolada}]}}
      >Girando...</Animated.Text>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight:'bold',
  }
});
