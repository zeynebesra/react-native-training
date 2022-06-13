import * as React from 'react';
import {View, Text ,FlatList,StyleSheet,TextInput  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import patikaProducts from "./product.json"
import ProductCard from "./components/productCard";
// or any pure javascript modules available in npm


export default function App() {
   const renderProducts = ({item}) => <ProductCard products={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patika Store</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
        numColumns={2}
        data={patikaProducts}
        renderItem={renderProducts}
       />
    </View>
  );
}
//Style
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  header:{
    marginTop:20,
    fontSize:35,
    color:"#800080",
    fontWeight:"bold",
    marginLeft:10,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius:5,
    padding: 10,
    backgroundColor:"#eee"
  },

});

