import { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Background from './Background';
import { useNavigation } from '@react-navigation/native';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import axios from 'axios';
import phoneInfo from './phoneValid';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

   const [errorMsg, setErrorMsg] = useState('');
   const [success, setSuccess] = useState(false);

  const handleSignup = async() => {
    try {
      // navigation.navigate('CampaignForm1');
      // console.log('Sending signup request');
      // Alert.alert("Hello");
      // console.log(email);
      const config = { headers : {'Content-Type' : 'application/json'}};
      // const response = await axios.post(
      //   '/signup',
      //   {
      //    email,phone,password
      //   },
      //   config,
      //   );
      // console.log('hello1');
      // console.log(response.data);
      // console.log('Navigating to CampaignForm1');
      setErrorMsg('');
      const response = await axios.post(
        'http://10.0.2.2:4001/signup',
        {
          email,
          phone,
          password,
        },
        {headers: {'Content-Type': 'application/json'}},
      );
      // // console.log("hello")
        phoneInfo.phone = phone;

        if (!response.data.success) {
          setErrorMsg(response.data.message);
          return;
        }

        setSuccess(response.data.success);
      // Alert.alert("email",response.data);
      navigation.navigate('OTPVerification3');
      // Alert.alert('Hello');
    } catch (error) {
      console.error(error);
      // Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  // const Signup = ({navigation}) => {
  //   const [email, setEmail] = useState('')
  //   const [phone, setPhone] = useState('')
  //   const [password,setPassword] = useState('')
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 65,
            fontWeight: 'bold',
            marginTop: 20,
            marginRight: 55,
          }}>
          Signup
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
            marginRight: 50,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 550,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
            onChangeText={email => setEmail(email)}
          />
          <Field
            placeholder="Phone"
            keyboardType={'phone-pad'}
            onChangeText={phone => setPhone(phone)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          {(errorMsg.length !== 0 || success) && (
            <Text
              style={{
                // textAlign: 'left',
                fontSize: 16,
                marginBottom: 15,
                marginLeft: -135,
                fontWeight: 'bold',
                color: `${success ? 'green' : 'red'}`,
              }}>
              {success ? 'Otp is sent' : errorMsg}
            </Text>
          )}
          {/* <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 20,
              marginBottom: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 16, marginRight: 40}}>
              and{' '}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: -37,
              }}>
              Privacy Policy
            </Text>
          </View>
          <View style={{paddingRight: 10, marginLeft: -28, marginTop: 30}}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              Press={handleSignup}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 45,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: -60}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;