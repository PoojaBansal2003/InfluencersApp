import { useState } from 'react';
import { TextInput, View, StyleSheet,Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import campaignForm8 from './CampaignForm8';

const CampaignForm7 = ({navigation}) => {
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
  const handleNext = () => {
    navigation.navigate('campaignForm8');
   
  };

   
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.Text1}><TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" size={40} color="black" />
      </TouchableOpacity>Campaign Details Form for Hobo.Video Platform </Text>
      <Text style={styles.Text2}>Any message for us?</Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer "
        placeholderTextColor="#999"
        value={text1}
        onChangeText={handleText1Change}
      />
      
      </View>
    
    <View style={styles.container1}>
      <Text style={styles.Text3}>If influencers do not get any response from you, what email id should be provided to them to approach you?
*</Text>
      <Text>You can provide your influencer support/PR/marketing group email id where you manage queries from the influencers..
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
      <Button title=" Next" onPress={handleNext} />
    </View>
    </>
  );
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
export default CampaignForm7;