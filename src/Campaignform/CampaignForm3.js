import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import campaignAns from './campaignFormAns';
// import { TextInput } from 'react-native-gesture-handler';

const CampaignForm3 = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);
  const [toggleCheckBox8, setToggleCheckBox8] = useState(false);
  const [toggleCheckBox9, setToggleCheckBox9] = useState(false);
  const [toggleCheckBox10, setToggleCheckBox10] = useState(false);
  const [otherText,setOtherText] = useState("");
 const [isChecked, setIsChecked] = useState(false);
  const [textInputView, setTextInputView] = useState("");

 

  const filterOptions = (text) =>{
    const filteredOptions = options.filter(option => option.toLowerCase().includes(text.toLowerCase()));
    return filteredOptions;
  };

  const handleSelectOtherOption = () =>{
    setShowOtherInput(!showOtherInput);
    setInputValue('');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    const catTarg = [];
    if (toggleCheckBox){
      catTarg.push('Skincare');
    }
    if (toggleCheckBox1) {
      catTarg.push('Cosmetics');
    }
    if (toggleCheckBox2) {
      catTarg.push('Lifestyle');
    }
    if (toggleCheckBox3) {
      catTarg.push('Haircare');
    }  
    if (toggleCheckBox4) {
      catTarg.push('Beauty');
    } 
    if (toggleCheckBox5) {
      catTarg.push('Food');
    } 
    if (toggleCheckBox6) {
      catTarg.push('Fashion');
    } 
    if (toggleCheckBox7) {
      catTarg.push('Health & Fitness');
    } 
    if (toggleCheckBox8) {
      catTarg.push("Travel");
    } 

    if (otherText.length !== 0 && setToggleCheckBox10) {
      catTarg.push(otherText);
    }
    campaignAns.targetCategoriesInfluencer = catTarg;
    navigation.navigate('campaignForm5');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.icon}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Influencers Categories You Want to Target *
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Skincare</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Cosmetics</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Lifestyle</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={newValue => setToggleCheckBox3(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Haircare</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={newValue => setToggleCheckBox4(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Beauty</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox5}
            onValueChange={newValue => setToggleCheckBox5(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Food</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox6}
            onValueChange={newValue => setToggleCheckBox6(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Fashion</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox7}
            onValueChange={newValue => setToggleCheckBox7(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Health & Fitness</Text>
        </View>
        {/* <Text style={styles.label}> Travel</Text> */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox8}
            onValueChange={newValue => setToggleCheckBox8(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Travel</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox10}
            onValueChange={newValue => setToggleCheckBox10(newValue)}
            style={styles.checkbox}
          />
          <TextInput
            placeholder="Others"
            style={styles.others}
            onChangeText={(text) => setOtherText(text)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Next " onPress={handleNext} />
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: -5,
    marginTop: 25,
  },
  others: {
    fontSize: 20,
    marginLeft : 10,
    padding : 0,
  },
  icon: {
    marginLeft: -5,
    top: -44,
  },
  contentContainer: {
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
  },
  buttonContainer: {
    marginVertical: 5,
    marginHorizontal: 100,
  },
});

export default CampaignForm3;
