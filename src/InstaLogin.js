import React from 'react';
import { useState } from 'react';
import { View, Button, StyleSheet, Modal } from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
import WebView from 'react-native-webview';

const InstaLogin = () => {
  const loginRef = React.useRef();

  const onLoginSuccess = (token) => {
    console.log('Access Token:', token);
  };

  const onLoginFailure = (error) => {
    // Handle the login failure here
    console.log('Login Error:', error);
  };

  return (
    <View style={StyleSheet.Button}>
      <Button title="Instagram Login" onPress={() => loginRef.current.show()} />  
      <InstagramLogin
        ref={loginRef}
        appId="985711112772699"
        redirectUrl="http://localhost:4001/"
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={onLoginSuccess}
        onLoginFailure={onLoginFailure}
      />
    </View>
  );
};

export default InstaLogin;

const styles = StyleSheet.create({
  Button:{

  }
})