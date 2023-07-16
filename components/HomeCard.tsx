/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

interface CardProps {
  imageUri: string;
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ imageUri, title, description, buttonText, onPress }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 20,
      marginVertical: 10,
    },
    image: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 150,
    },
    content: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      marginTop: 8,
      fontSize: 14,
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 12,
      width: 110,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

export default Card;
