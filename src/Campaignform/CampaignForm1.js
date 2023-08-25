import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import campaignAns from './campaignFormAns';

const CampaignForm1 = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [influencerCount, setInfluencerCount] = useState('');
  const [cashValue, setCashValue] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

 const handleNext = async () => {
   try {
     const paymentType = [];
     if (toggleCheckBox) campaignAns.paymentType.push('Products');
     if (toggleCheckBox1) campaignAns.paymentType.push('Cash/Money');
     if (toggleCheckBox2) campaignAns.paymentType.push('Other');

     const answerText = `Influencer Count: ${influencerCount}\nPayment Type: ${paymentType.join(
       ', ',
     )}\nCash Value: ${cashValue}`;

    //  const response = await axios.post('http://10.0.2.2:4001/answers', {
    //    answer: answerText,
    //  });

    //  console.log(response.data); // This will log the response from the backend
     campaignAns.influencer = influencerCount;
     campaignAns.paymentType.shift();
    //  campaignAns.paymentType = paymentType;
     campaignAns.price = cashValue;
     navigation.navigate('CampaignForm2');
   } catch (error) {
     console.error(error);
   }
 };


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.icon}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Campaign Details Form for Hobo.Video Platform
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>
            Details to kickstart the campaign-
          </Text>

          <Text style={styles.label}>
            How many influencers are you looking forward to work with? *
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer"
            placeholderTextColor="#999"
            value={influencerCount}
            onChangeText={setInfluencerCount}
          />

          <Text style={styles.label}>
            What would you be giving to influencers in exchange for
            deliverables?
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Products</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={newValue => setToggleCheckBox1(newValue)}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Cash/Money</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={newValue => setToggleCheckBox2(newValue)}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Other</Text>
          </View>
        </View>

        <View style={styles.additionalQuestionContainer}>
          <Text style={styles.additionalQuestionLabel}>
            Value (in Rs.) of the cash/products being given to influencers? *
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer"
            placeholderTextColor="#999"
            value={cashValue}
            onChangeText={setCashValue}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleNext} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 4,
    marginLeft: 23,
  },
  icon: {
    marginLeft: 3,
    top: -55,
  },
  contentContainer: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  sectionTitle: {
    color: '#5A5A5A',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 25,
    marginLeft: 7,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 7,
    fontWeight: 'bold',
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 25,
    color: '#000',
    width: '85%',
    marginLeft: 7,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    fontSize: 20,
    marginLeft: 10,
  },
  additionalQuestionContainer: {
    marginHorizontal: 20,
  },
  additionalQuestionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 7,
    marginTop: 5,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
});

export default CampaignForm1;
