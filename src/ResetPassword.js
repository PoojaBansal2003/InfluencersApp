import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
// import {FontAwesome5} from '@expo/vector-icons';
import axios from 'axios';
import phoneInfo from './phoneValid';
import Login from './Login';
const ResetPassword = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);
    setError('');
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    setError('');
  };

  const handleSubmit = async() => {
    if (password !== confirmPassword) {
      Alert.alert('Error', "Password don't match");
      return;
    } 

    try{
      
      setErrorMsg("");
      let phone  = phoneInfo.phone
      const response = await axios.post("http://10.0.2.2:4001/createPassword",{phone,password},{headers : {"Content-Type" : "application/json"}})
      
      setErrorMsg(response.data.message);

      navigation.navigate('Login')

    }catch(error){
      console.log(error);
    }




  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password</Text>

      <View style={[styles.formGroup, error && styles.error]}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
        />
        {/* <FontAwesome5
          name={showPassword ? 'eye-slash' : 'eye'}
          size={18}
          onPress={togglePassword}
          style={styles.icon}
        /> */}
      </View>

      <View style={[styles.formGroup, error && styles.error]}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        {/* <FontAwesome5
          name={showConfirmPassword ? 'eye-slash' : 'eye'}
          size={18}
          onPress={toggleConfirmPassword}
          style={styles.icon}
        /> */}
      </View>

      {success === false ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
      {/* {!error ? <Text style={styles.errorText}>{"dkawdajkwd"}</Text> : null} */}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width: '80%',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 8,
  },
  icon: {
    position: 'absolute',
    top: 35,
    right: 10,
    color: '#888',
  },
  error: {
    borderColor: '#ff4d4d',
  },
  errorText: {
    color: 'green',
    marginBottom: 20,
    fontSize : 16
  },
  button: {
    backgroundColor: '#337ab7',
    padding: 10,
    borderRadius: 3,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ResetPassword;
