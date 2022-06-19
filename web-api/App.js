import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, View, StyleSheet ,SafeAreaView,Button,FlatList,ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  //loading için state
  const [loading,setLoading] = useState(true);
  //liste tutulması için state tanımlanıyor
  const [userList,setUserList] = useState([]);

  async function fetchData(){
  const response = await axios.get(URL);
  setLoading(false);
  setUserList(response.data);
  }

  const renderUser = ({item}) => <UserCard name={item.name} username={item.username} email={item.email}/>

  useEffect(() => {
    fetchData();
    }, []);


  return (
    <SafeAreaView>
    <View style={styles.container}>
    { loading ? (
      <ActivityIndicator size="large"/>
    ):(
    <FlatList data={userList} renderItem={renderUser}/>
    )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:50,
  },
  
});
