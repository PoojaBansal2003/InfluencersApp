import { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity, Alert, Image } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import TabNavigator from './TabNavigator';
import Signup from './Signup';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CampaignForm1 from './Campaignform/CampaignForm1';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState("");

  const handleLogin = async() => {
    try{
        setError("");
       const response = await axios.post(
        'http://10.0.2.2:4001/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
        )
        // Alert.alert(response.data.error);
        if(!response.data.success){
          setError(response.data.error);
          // Alert.alert(error);
          return;
        }
        // navigation.navigate("CampaignForm1");
        navigation.navigate(TabNavigator);
    }catch(error){
        console.error(error);
    }      
      // console.log("hello");
      
      // Alert.alert("Hello");
  };
  

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460, flex: 1}}>
        <Text
          style={{
            marginRight: 50,
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            marginRight: 20,
            backgroundColor: 'white',
            height: 900,
            width: 525,
            borderTopLeftRadius: 130,
            paddingTop: 35,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: darkGreen,
              fontWeight: 'bold',
              marginRight: 25,
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              marginRight: 22,
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          {error.length !== 0 && (
            <Text
              style={{textAlign: 'left', marginRight: 220, fontWeight: 'bold',color:'red'}}>
             {error}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{
              alignItems: 'flex-end',
              width: '70%',
              paddingRight: 40,
              marginBottom: 50,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={{marginBottom: 35}}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              Press={handleLogin}
            />
          </View>

          <View style={{marginHorizontal: 50}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontWeight: 'bold',
                fontSize: 17,
                marginLeft: 10,
                marginTop: -20,
              }}>
              OR Login with
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('InstaLogin')}>
            <View style={{paddingRight: 100}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}></Text>
              <Image
                style={{height: 35, width: 35}}
                source={require('../src/assets/instagram.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PhoneLogin')}>
            <View style={{paddingLeft: 50, marginTop: -52}}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}></Text>
              <Image
                style={{height: 29, width: 29}}
                source={require('../src/assets/viber.png')}></Image>
            </View>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}></Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: -27,
                marginLeft: 8,
              }}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: -27,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;