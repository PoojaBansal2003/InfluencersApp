import { useState } from 'react';
import { TextInput, View, StyleSheet,Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import campaignForm1 from './CampaignForm1';
import { NavigationAction } from 'react-navigation';

const CampaignForm = ({navigation}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
 
  const handleText1Change = (text) => {
    setText1(text);
  };

  const handleText2Change = (text) => {
    setText2(text);
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNavigate = () => {
    navigation.navigate('campaignForm1');
  
   
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Text1}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="arrow-left" size={40} color="black" />
          </TouchableOpacity>
          Campaign Details Form for Hobo.Video Platform{' '}
        </Text>
        <Text style={styles.Text2}>Details to kickstart the campaign </Text>
        <Text style={styles.Text4}>
          How many influencers are you looking forward to work with? *
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your answer "
          placeholderTextColor="#999"
          value={text1}
          onChangeText={handleText1Change}
        />

        <View style={styles.container1}>
          <Text style={styles.Text3}>
            Please specify the exact deliverables you want from Influencers *
          </Text>
          <TextInput
            style={styles.input2}
            placeholder="Your answer "
            placeholderTextColor="#999"
            value={text2}
            onChangeText={handleText2Change}
          />
        </View>
        <View>
          <Button title=" Next" onPress={handleNavigate} />
        </View>
      </View>
    </>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    marginBottom: 569,
    color: '#000',
    width:'85%'
       
  },
 
  
  Text1:{
    color: 'black',
    fontSize:35,
    fontWeight: 'bold',
    padding:5

  },
  Text2:{
    color: 'black',
    fontSize:25,
    fontWeight: 'bold',
    marginBottom:30
   
  },
  Text3:{
    color: 'black',
    fontSize:20,
    fontWeight: 'bold',
   
  },
  Text4:{
    color: 'black',
    fontSize:20,
    fontWeight: 'bold',
   
  },
  input2:{
      height: 42,
      borderBottomWidth:1,
      borderBottomColor: '#999',
      marginHorizontal: 5,
      marginBottom: 400,
      color: '#000',
      width:'85%'   
      
    
  },
  
  
  container1: {
    flex:0.5
    
  },
});
export default CampaignForm;