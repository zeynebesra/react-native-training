import * as React from 'react';

import Constants from 'expo-constants';

import {View,Text,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import song_data from './music-data.json';

import  SongCard  from './components/SongCard/SongCard';

export default function App() {
  const renderSong=({item})=><SongCard song={item}/>;
  const itemSeperatorItem=()=><View style={styles.seperator}></View>
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
        keyExtractor={item=>item.id}
        data={song_data}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeperatorItem}
        />
      </View>
    </SafeAreaView>
    )
}

const styles =StyleSheet.create({
  container:{margintop:20,flex:1},
  seperator:{borderWidth:1,borderColor:'#e0e0e0'}
});