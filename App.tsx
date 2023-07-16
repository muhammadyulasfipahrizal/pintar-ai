/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Card from './components/HomeCard';
import KursusScreen from './components/KursusScreen';

export default function App() {
  const [visible, setVisible] = useState(true);

  const handleStartCourse = () => {
    setVisible(false);
  };

  const handleShowCards = () => {
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {visible && (
        <>
          <Card
            imageUri="https://qwords.com/blog/wp-content/uploads/2019/12/kode-HTML.jpg"
            title="HTML Fundamental"
            description="lorem sit dolor amet sit lorem sit dolor amet lorem sit dolor amet"
            buttonText="Mulai Kursus"
            onPress={handleStartCourse}
          />
          <Card
            imageUri="https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f.jpeg"
            title="CSS Fundamental"
            description="lorem sit dolor amet sit lorem sit dolor amet lorem sit dolor amet"
            buttonText="Mulai Kursus"
            onPress={handleStartCourse}
          />
        </>
      )}
      {!visible && (
        <>
        <TouchableOpacity style={styles.showCardsButton} onPress={handleShowCards}>
          <Text style={styles.showCardsButtonText}>Back</Text>
        </TouchableOpacity>
        <KursusScreen/>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  showCardsButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 60,
    marginVertical: 10,
    marginStart: 15,
    alignSelf: 'flex-start',
  },
  showCardsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

