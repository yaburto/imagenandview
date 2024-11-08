import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require('./assets/logo_municipalidad.png')}
      />
      <Text style={styles.text}>¡Bienvenido al ejercicio de imagen, vista y texto!</Text>
      <Image
        style={styles.bottomImage}
        source={require('./assets/google.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  topImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomImage: {
    width: 191,
    height: 46,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 20,
  },
});
