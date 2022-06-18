import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign(){
  return(
  <View style={styles.container}>
  <Input label='Üye Adı' placeholder="Üye ismini giriniz..."/>
  <Input label='Üye Soyadı' placeholder="Üye soyadını giriniz..."/>
  <Input label='Üye Yaş' placeholder="Üye yaşını giriniz..."/>
  <Input label='Üye E-posta' placeholder="Üye eposta giriniz..."/>
  <Button text=' Kaydı Tamamla ' onPress={null}/>
  </View>
  );
}

export default MemberSign;

const styles = StyleSheet.create({
  container:{
    marginTop:25,
  }
});