import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import campaignAns from './campaignFormAns';

const CampaignForm2 = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleText1Change = text => {
    setText1(text);
  };

  const handleText2Change = text => {
    setText2(text);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {

    // campaignAns.influencers
    let targetingGender = [];
    if (toggleCheckBox){
      targetingGender.push("Male");
    } 
    if(toggleCheckBox1){
      targetingGender.push('Female');
    }
    if(toggleCheckBox2){
      targetingGender.push('Both Male and Female');
    }
    if(toggleCheckBox3){
      targetingGender.push('Transgender');
    }
    if(toggleCheckBox4){
      targetingGender.push('Any Gender');
    }

    campaignAns.targetingGender = targetingGender;
    campaignAns.targetFollower = text1;
    campaignAns.targetCategories = text2;

    navigation.navigate('CampaignForm3');
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-left" size={40} color="black" />
        </TouchableOpacity>

        <Text style={styles.Text2}>Target influencers' gender*</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Male</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Female</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Both Male and Female</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={newValue => setToggleCheckBox3(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Transgender</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={newValue => setToggleCheckBox4(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Any Gender</Text>
        </View>

        <View style={styles.qbox}>
          <Text style={styles.heading}>
            Target influencers' follower base*
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer"
            placeholderTextColor="#999"
            value={text1}
            onChangeText={handleText1Change}
          />
        </View>

        <View style={styles.qbox}>
          <Text style={styles.heading}>
            Influencers categories which you want to target*
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer"
            placeholderTextColor="#999"
            value={text2}
            onChangeText={handleText2Change}
          />
        </View>

        <View>
          <Button title="Next" onPress={handleNext} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
  },
  Text2: {
    color: '#5A5A5A',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 15,
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    color: '#000',
  },
  qbox: {
    marginBottom: 40,
    
  },
  heading:{
    color: '#5A5A5A',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 19,
  }
});

export default CampaignForm2;
