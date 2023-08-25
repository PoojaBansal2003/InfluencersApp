import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';
import axios from 'axios'; // Import axios here
import answer from './brandDetailAns';

const BrandDetails2 = ({navigation}) => {
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');

  const handleText5Change = text => {
    setText5(text);
  };

  const handleText6Change = text => {
    setText6(text);
  };

 const handleNext = async () => {
   try {
     console.log('Sending POST request...');
    //  Alert.alert("HI");
    answer.shortDescription = text5;
    answer.brandUsp2 = text6;
     const response = await axios.post('http://10.0.2.2:4001/answers', {
       answer
     });
     console.log('Response:', response.data);
// Alert.alert('HI');
     // Only navigate here after the POST request is successfully completed
     navigation.navigate('CampaignForm1');
   } catch (error) {
     console.error('Error:', error);
   }
 };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Brand Details</Text>
      <Text style={styles.subHeading}>
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

      {/* <Text style={styles.subHeading}>Brand USPs (If Any)</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer"
        placeholderTextColor="#999"
        value={text6}
        onChangeText={handleText6Change}
      /> */}

      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  description: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginVertical: 10,
    color: '#000',
  },
});

export default BrandDetails2;
