import React, {useState} from 'react';
import {  Text, View, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import axios from 'axios';
import phoneInfo from './phoneValid';
const PhoneLogin = ({navigation}) =>{
    const [phoneNumber, setPhoneNumber ] = useState("");
const [err, setErr] = useState("");
const [errorMsg, setErrorMsg] = useState('');
const [success, setSuccess] = useState(false);
    const handleLogin = async() => {
  const phoneNumberRegex = /^[0-9]{10}$/;
//   if(!phoneNumberRegex.test(phoneNumber))
//     setErr("Invalid phone number");
//     return;
//   }
if(phoneNumber.length !==10 || !phoneNumberRegex.test(phoneNumber)){
  setErr("Phone number should be a valid 10 digit number");
  return;
}
try{
  setSuccess(false);
  setErr("");
  const response = await axios.post('http://10.0.2.2:4001/login/phone',{phoneNumber},{headers :{ "Content-Type" : "application/json"}});
  
     if (!response.data.success) {
       setErrorMsg(response.data.message);
       return;
     }

     setSuccess(response.data.success);

  phoneInfo.phone = phoneNumber;
       // navigation.navigate('OTPVerification',{phoneNumber : phoneNumber});
      navigation.navigate('OTPVerification');  
     }catch(error){
      console.log(error);

     }


    };
//     fetch('http://10.0.2.2:4001/login/phone', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: phoneNumber
// })
//   .then(response => response.json())
//   .then(data => {
//     // Process the response from the backend
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
//   });
   
return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      label="Phone Number"
      placeholder="Enter your phone number"
      value={phoneNumber}
      onChangeText={text => setPhoneNumber(text)}
      keyboardType="phone-pad"
    />
    {(errorMsg.length !== 0 || success) && (
      <Text
        style={{
          // textAlign: 'left',
          fontSize: 16,
          marginBottom: 20,
          fontWeight: 'bold',
          color: `${success ? 'green' : 'red'}`,
        }}>
        {success ? 'Otp is Verified' : errorMsg}
      </Text>
    )}
    {err ? <Text style={styles.err}>{err}</Text> : null}
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <StatusBar backgroundColor="black" barStyle="light-content" />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#337ab7",
    padding: 10,
    borderRadius: 3,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  err:{
   color: 'red',
   marginTop: 5,
   marginBottom: 5
  }
});
export default PhoneLogin;