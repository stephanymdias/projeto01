import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'purple',
    }}>
      <Text style={{
        color:'white'
      }}>
      Agora um poema: 
      </Text>
      <Text style={{
        color:'white'
      }}>
     "Super-herói de gueto tem um nome: VEIGH!"
      </Text>
      </View>
);
}