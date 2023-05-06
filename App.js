import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [insult, setInsult] = useState('');
  const [compliment, setCompliment] = useState('');

  const generateInsult = async () => {
    try {
      const response = await fetch('https://insult.mattbas.org/api/insult.json');
      const data = await response.json();
      setInsult(data.insult);
      setCompliment('');
    } catch (error) {
      console.error(error);
    }
  };

  const generateCompliment = async () => {
    try {
      const response = await fetch('https://complimentr.com/api');
      const data = await response.json();
      setCompliment(data.compliment);
      setInsult('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insult or Compliment</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generateInsult}>
          <Text style={styles.buttonText}>Insult</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={generateCompliment}>
          <Text style={styles.buttonText}>Compliment</Text>
        </TouchableOpacity>
      </View>
      {insult !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Insult:</Text>
          <Text style={styles.resultText}>{insult}</Text>
        </View>
      )}
      {compliment !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Compliment:</Text>
          <Text style={styles.resultText}>{compliment}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
