import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Kanhaiya from '../src/Card';
import Background from '../src/Background';
import Btn from '../src/Btn';
import { darkGreen, green } from '../src/Constants';
import BottomBar from '../src/Bottom';
//import TopTextInput from '../src/TopTextInput';
import TopBox from '../src/TopTextInput';
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Kanhaiya />
      <BottomBar/>
      <TopBox/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  }
})

export default HomeScreen;
