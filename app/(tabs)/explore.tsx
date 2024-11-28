import React from 'react';
import {  View, Text, Image, StyleSheet} from 'react-native';

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
      Galeria Billie: 
      </Text>
      <Image
        source={{ uri: 'https://media.tenor.com/sJkcBdZSn6AAAAAM/billiepins.gif' }}
        style={styles.productImage}
      />
       <Image
        source={{ uri: 'https://c.tenor.com/eNVQ1fZNV4gAAAAd/tenor.gif' }}
        style={styles.productImage}
      />
        <Image
        source={{ uri: 'https://media.tenor.com/UjNwZ-exsQAAAAAM/billie-eilish-billie-eilish-confused.gif' }}
        style={styles.productImage}
      />
          <Image
        source={{ uri: 'https://c.tenor.com/-Gtvs6OpAWYAAAAd/tenor.gif' }}
        style={styles.productImage}
      />
          <Image
        source={{ uri: 'https://media.tenor.com/7W6yCSbt0ZkAAAAM/billie-eilish-lunch.gif' }}
        style={styles.productImage}
      />
      </View>
);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
});