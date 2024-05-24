import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, StyleSheet, Button, Image } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  const resetText = () => {
    setText('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Traductor de palabras a pizza</Text>
        <Text style={styles.subtitle}>Grupo 09</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style={styles.output}>
          {text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
        <Button title="Reset" onPress={resetText} />
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        />
        <Text style={styles.footer}>Hecho por Johan Vergara y Elkin Santis</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  output: {
    padding: 10,
    fontSize: 42,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PizzaTranslator;
