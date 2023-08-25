import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import phone from './phoneValid';
import phoneInfo from './phoneValid';
import axios from 'axios';
import TabNavigator from './TabNavigator';
import ResetPassword from './ResetPassword';
const OTPScreen2 = ({navigation}) => {
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [expired, setExpired] = useState(false);
    
  // const[err, setErr] = useState("");

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setExpired(true);
    }
  }, [timer]);

  const handleOTPEdit = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (index === 6 && value !== '') {
      handleSubmit();
    }
  };

  const handleTimer = () => {
    setTimer(30);
    setExpired(false);
  };

  const handleSubmit = async () => {
    // Alert.alert(
    //   phoneInfo.phone
    // );
    let numOtp = '';
    otp.map((val, i) => (numOtp = numOtp + val));

    // Alert.alert(phoneInfo.phone);
    let phoneNum = phoneInfo.phone;
    // try{
    // console.log("hello");
    //  console.log("OTP submitted:", otp);

    try {
      setErrorMsg('');
      const response = await axios.post(
        'http://10.0.2.2:4001/verifyPhone',
        {phoneNum, numOtp},
        {headers: {'Content-Type': 'application/json'}},
      );

      // Alert.alert(response.data.message);
      if (!response.data.success) {
        setErrorMsg(response.data.message);
        return;
      }
        // Alert.alert("Tmkc");
      setSuccess(response.data.success);
      // console.log("hello");
      navigation.navigate(ResetPassword);
    } catch (error) {
      // Alert.alert("dawd");
      console.log(error);
    }

    // navigation.navigate('BrandDetails')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter 6 digit Verification code sent to your number
      </Text>
      <View style={styles.otpContainer}>
        {Array.from({length: 6}, (_, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={value => handleOTPEdit(index, value)}
            value={otp[index]}
          />
        ))}
      </View>

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

      {expired ? (
        <TouchableOpacity onPress={handleTimer}>
          <Text style={styles.timer}>Resent OTP</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.timer}>OTP Expires in: {timer} seconds </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}> Submit </Text>
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
  },
  title: {
    fontSize: 20,
    marginBottom: 34,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },
  otpInput: {
    backgroundColor: '#D3D3D3',
    width: 40,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#337ab7',
    padding: 10,
    borderRadius: 3,
    width: '90%',
    marginTop: 60,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  timer: {
    marginBottom: 60,
    fontSize: 15,
  },
});

export default OTPScreen2;
