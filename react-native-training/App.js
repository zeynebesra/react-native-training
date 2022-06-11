import * as React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Card from './components/Card';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Card title='Cahit Zarifoğlu' text = 'Kuşlara takılıp gidiyor aklım.'/>
    <Card title ='Necip Fazıl Kısakürek' text = 'Akıl, varken yok, yokken var bir keyfiyettir.'/>
     <Card title ='Sezai Karakoç' text = 'Hızır’ın olacaksın kendi kendinin.'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
