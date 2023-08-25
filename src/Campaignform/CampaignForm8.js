import {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import TabNavigator from '../TabNavigator';
import campaignAns from './campaignFormAns';
import axios from 'axios';
const CampaignForm8 = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  // const [dattaat,setdattaat] = useState(0);
  const handleCheck = () => {
    setChecked(!isChecked);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubmitButton = async() => {

    if(isChecked){
      // Alert.alert(campaignAns.targetCategoriesInfluencer[1]);
      // console.log(campaignAns);
      // const response = await axios.post(
      //   'http://10.0.2.2:4001/test1',
      //   {
      //     campaignAns,
      //   },
      //   {headers: {'Content-Type': 'application/json'}},
      // );
      const response = await axios.post(
        'http://10.0.2.2:4001/ans',
        {
          campaignAns,
        },
        {headers: {'Content-Type': 'application/json'}},
      );
    console.log(response.data);
    }else{
      Alert.alert("Please Check the Mark");
      return;
    }
    navigation.navigate(TabNavigator);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.Text2}>
        Important Notice: I hereby declare that the above particulars of facts
        and information stated are correct to the best of my belief and
        knowledge. All the facts in this submission are correct and truthful. I
        take full responsibility for their accuracy. I am the authorized person
        from the brand to submit the above campaign information and will not be
        canceling the campaign in the future.
      </Text>
      <View style={styles.checkBoxContainer}>
        <CheckBox value={isChecked} onValueChange={handleCheck} />
        <Text style={styles.agreeText}>I Agree</Text>
      </View>
      <Button title="Submit" onPress={handleSubmitButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  Text2: {
    color: 'black',
    fontSize: 22,
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  agreeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default CampaignForm8;
