import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import answer from './brandDetailAns';

const BrandDetails1 = ({navigation}) => {
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');

  const handleText4Change = text => {
    setText4(text);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleText5Change = text => {
    setText5(text);
  };

  const handleText6Change = text => {
    setText6(text);
  };

  const handleNext = async () => {
     try {
    // const response = await axios.post('http://10.0.2.2:4001/answers', {
    //   shortDescription: text4,
    //   userEmail: text5,
    //   brandUSPs: text6,
    // });
    // console.log(response.data);
    // const value = await AsyncStorage.getItem('answer');
      answer.brandInfo = text4;
      answer.email = text5;
      answer.brandUsp = text6;
    // Alert.alert(answer.yourName);
    navigation.navigate('BrandDetails2');
  } catch (error) {
    console.error(error);
  }
    // navigation.navigate('BrandDetails2');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.brandDetailsText}>Brand Details</Text>

      <Text style={styles.descriptionText}>
        Short description about the brand or company *
      </Text>
      <Text style={styles.description}>
        Enter relevant information that will help us validate your connection to
        this brand.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text5}
        onChangeText={handleText5Change}
      />

      <Text style={styles.emailText}>Your email *</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text4}
        onChangeText={handleText4Change}
      />

      <Text style={styles.emailText}>Brand USPs (If Any)</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text6}
        onChangeText={handleText6Change}
      />

      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
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
    top: 40,
    left: 20,
    zIndex: 1,
  },
  brandDetailsText: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#556',
    marginTop: 34,
    fontWeight: 'bold',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 20,
    color: '#000',
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BrandDetails1;
