import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../src/Background';
import Btn from '../src/Btn';
import { darkGreen, green } from '../src/Constants';
import { Button } from 'react-native-paper';
const LoginHome = (props) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={{ color: 'white', fontSize: 45 }}>Welcome To Hobo </Text>
                {/* <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Hobo</Text> */}
            </View>
            <View style={styles.Loginbtn}>
                <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
            </View>
            <View style={styles.Signupbtn}>
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
            </View>
        </Background>

    )
}
export default LoginHome;

const styles = StyleSheet.create({
    container: {
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 40,
        marginVertical: 15,
    },
    Loginbtn: {
        flex: 1,
        borderRadius: 10,
        marginTop: 156,
       paddingTop: 10,
       paddingBottom: 20,
        marginLeft: 35
    },
    Signupbtn: {
        flex: 1,
        paddingTop: 10,
        paddingBottom:100,
        marginLeft: 35,
       marginBottom: 45,

    }
})
