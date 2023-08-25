import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import axios from 'axios';
import ResetPassword from './ResetPassword';
import TabNavigator from './TabNavigator';
import OTPScreen2 from './OTPVerification2';
import phoneInfo from './phoneValid';
const ForgotPassword = ({navigation}) => {
  const [phone, setPhone] = useState('');
 const [resetStatus, setResetStatus] = useState('');

  const handleResetPassword = async () => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid phone number', 'Please enter a valid phone number.');
      return;
    }

    try {
      const response = await axios.post(
        'http://10.0.2.2:4001/forgotPassword',
        {phone},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      phoneInfo.phone = phone;
      Alert.alert('Password Reset', 'An OTP has been sent to your phone number.');

      navigation.navigate('OTPVerification2');

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send password reset OTP.');
      //  navigation.navigate('TabNavigator');
    }
    setResetStatus('success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your registered number"
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#337ab7',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
