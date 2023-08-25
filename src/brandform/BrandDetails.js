import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import answer from './brandDetailAns';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const BrandDetails = ({navigation}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleText1Change = text => {
    setText1(text);
  };

  const handleText2Change = text => {
    setText2(text);
  };

  const handleText3Change = text => {
    setText3(text);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = async () => {
    try {
      // const response = await axios.post('http://10.0.2.2:4001/answers', {
      //   brandName: text1,
      //   yourName: text2,
      //   contact : text3,
      //   // answer: `${text1} ${text2} ${text3}`
      // });
      // console.log(response.data);
      // AsyncStorage.setItem('answer',{brandName: text1,
      //   yourName: text2,
      //    contact : text3,} );
      answer.brandName = text1;
      answer.yourName = text2;
      answer.contact = text3;
      console.log(answer);
      navigation.navigate('BrandDetails1');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={styles.Text1}>Brand Details</Text>
      <Text style={styles.Text2}> Brand Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text1}
        onChangeText={handleText1Change}
      />
      <Text style={styles.Text3}> Your Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text2}
        onChangeText={handleText2Change}
      />
      <Text style={styles.Text4}> Your contact number *</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text3}
        onChangeText={handleText3Change}
      />

      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: -10,
    zIndex: 1,
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 20,
    color: '#000',
  },
  Text1: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  Text2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  Text3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  Text4: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    marginTop: 60,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
});

export default BrandDetails;
