
import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {

  function goToMemberSign(){
    navigation.navigate("MemberSignScreen");
  }

  
  return (
    <View style={styles.main}>
        <Text style={styles.header}>Welcome</Text>
        <Button
          text="Üye Kaydı Oluştur"
          onPress={goToMemberSign}
        />
    </View>
  );
}

 const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    margin:10,
  }
});

export default Welcome;