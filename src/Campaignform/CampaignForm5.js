import {useState} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import campaignForm6 from './CampaignForm6';
import campaignAns from './campaignFormAns';

const CampaignForm5 = ({navigation}) => {
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
  const handleNext = () => {
    campaignAns.ageGroup = text1;
    campaignAns.productLink = text2;
    campaignAns.campaignTime = text3;
    navigation.navigate('campaignForm6');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.Text2}>
        What is your target audience age group? *{' '}
      </Text>
      <Text style={styles.Text4}>
        E.g. Loreal has target audience age group of 20-45 years *
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Your answer "
        placeholderTextColor="#999"
        value={text1}
        onChangeText={handleText1Change}
      />

      <Text style={styles.Text3}>
        Please mention the links of the products, influencers shall be getting
        (*If product shipment is involved)
      </Text>
      <Text style={styles.Text5}>
        Please write the correct product link. Writing wrong or general link
        will disqualify the campaign.
      </Text>
      <TextInput
        style={styles.input2}
        placeholder="Your answer "
        placeholderTextColor="#999"
        value={text2}
        onChangeText={handleText2Change}
      />

      <Text style={styles.Text8}>
        For how many weeks are you planning to run the campaign?
      </Text>
      <TextInput
        style={styles.input3}
        placeholder="Enter your answer"
        placeholderTextColor="#999"
        value={text3}
        onChangeText={handleText3Change}
      />

      <View style={styles.input4}>
        <Button title=" Next" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    marginBottom: 20,
    color: '#000',
    width: '85%',
    marginLeft: 7,
  },
  input2: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    marginBottom: 20,
    color: '#000',
    width: '85%',
    marginLeft: 7,
  },
  input3: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    color: '#000',
    width: '85%',
    marginLeft: 6,
    marginBottom: 20,
  },
  input4: {
    marginTop: 56,
  },
  Text1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  Text2: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 34,
  },
  Text8: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  Text4: {
    color: '#5A5A5A',
    fontSize: 16,
    marginBottom: 10,
  },
  Text3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Rest of your styles remain unchanged
});

export default CampaignForm5;
