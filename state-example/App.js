import * as React from 'react';
import {useState} from 'react';
import { SafeAreaView,Text,FlatList,Switch,StyleSheet,View} from 'react-native';
import Constants from 'expo-constants';

const data = [
  {id:0,name:'mihrimah',isFavorite:true},
  {id:1,name:'mahal',isFavorite:true},
  {id:2,name:'rumi',isFavorite:false},
  {id:3,name:'moon',isFavorite:false},
  {id:4,name:'andelib',isFavorite:true},
  {id:5,name:'kadim',isFavorite:false},

];

export default function App() {

  const [cafeList,setCafeList] = useState(data);
  const [showOnlyFavorites,setshowOnlyFavorites] = useState(false)

  function onFavoritesChange(isFavoriteSelected) {
    setshowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected ? setCafeList(cafeList.filter(cafe=>cafe.isFavorite)):setCafeList(data);
  }

  return (
    <SafeAreaView> 

    <View style={{margin:10}}>
    <Text>Show only Favorites</Text>
    <Switch value={setshowOnlyFavorites} onValueChange={onFavoritesChange} />
    </View>
    <FlatList
    data={cafeList}
    renderItem={({item}) => <Text style={{fontSize:25}}>{item.name} </Text>}/> 
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
