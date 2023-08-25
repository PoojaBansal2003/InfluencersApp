import {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import campaignForm7 from './CampaignForm7';
import campaignAns from './campaignFormAns';

const CampaignForm6 = ({navigation}) => {
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
    campaignAns.eligibleCriteria = text1;
    campaignAns.alternativeEmail = text3;
    campaignAns.anyMessage= text2;
    navigation.navigate('campaignForm8');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" size={40} color="black" />
      </TouchableOpacity>
      
      <View style={styles.container1}>
        <Text style={styles.subheading}>
          Any other eligibility criteria to select Influencers?
        </Text>
        <TextInput
          style={styles.input2}
          placeholder="Your answer"
          placeholderTextColor="#999"
          value={text1}
          onChangeText={handleText1Change}
        />
      </View>

      <Text style={styles.heading}>Any message for us?</Text>
      <TextInput
        style={styles.input3}
        placeholder="Your message..."
        placeholderTextColor="#999"
        value={text2}
        onChangeText={handleText2Change}
      />

      <Text style={styles.Text3}>
        If influencers do not get any response from you, what email id should be
        provided to them to approach you? *
      </Text>
      <Text style={styles.description}>
        You can provide your influencer support/PR/marketing group email id
        where you manage queries from the influencers.
      </Text>
      <TextInput
        style={styles.input2}
        placeholder="Email address"
        placeholderTextColor="#999"
        value={text3}
        onChangeText={handleText3Change}
      />

      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subheading: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 21,
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    color: '#000',
    width: '85%',
    marginBottom: 20,
    fontSize: 16,
  },
  input2: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    color: '#000',
    width: '85%',
    fontSize: 16,
  },
  input3: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    color: '#000',
    width: '85%',
    fontSize: 16,
    // textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
  },

  Text3: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  // You can add more styles as needed.
});

export default CampaignForm6;
