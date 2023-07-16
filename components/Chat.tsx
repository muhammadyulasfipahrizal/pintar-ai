/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Message = {
  id: number;
  text: string;
};

type ChatProps = {};

const Chat: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const handleMessageSend = () => {
    if (!message) {
      return;
    }
    const newMessage = {
      id: Math.random(),
      text: message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((message) => (
          <View key={message.id} style={styles.messageContainer}>
            <Text>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleMessageSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  messagesContainer: {
    flex: 1,
  },
  messageContainer: {
    backgroundColor: '#eee',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Chat;
