import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import HomeScreen from './screens/Home';
import Signup from './src/Signup'
import ForgotPassword from './src/ForgotPassword';
import InstaLogin from './src/InstaLogin';
import LoginHome from './screens/LoginHome';
import PhoneLogin from './src/phoneLogin';
import OTPVerification from './src/OTPVerification';
import OTPVerification2 from './src/OTPVerification2';
import OTPVerification3 from './src/OTPVerification3';
import BrandDetails from './src/brandform/BrandDetails';
import BrandDetails1 from './src/brandform/BrandDetails1';
import BrandDetails2 from './src/brandform/BrandDetails2';
import CampaignForm from './src/Campaignform/CampaignForm';
import campaignForm1 from './src/Campaignform/CampaignForm1';
import campaignForm2 from './src/Campaignform/CampaignForm2';
import campaignForm3 from './src/Campaignform/CampaignForm3';
// import campaignForm4 from './src/Campaignform/CampaignForm4';
// import CampaignForm4 from './src/Campaignform/CampaignForm4';
import campaignForm5 from './src/Campaignform/CampaignForm5';
import campaignForm6 from './src/Campaignform/CampaignForm6';
// import campaignForm7 from './src/Campaignform/CampaignForm7';
import campaignForm8 from './src/Campaignform/CampaignForm8';
import ResetPassword from './src/ResetPassword';
import AnalyticsScreen from './src/AnalyticsScreen';
import Phantom from './src/Phantom';
import DetailForm from './src/DetailForm';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginHome" component={LoginHome} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailForm} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTPVerification3" component={OTPVerification3} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTPVerification2" component={OTPVerification2} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="InstaLogin" component={InstaLogin} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="BrandDetails" component={BrandDetails} />
        <Stack.Screen name="BrandDetails1" component={BrandDetails1} />
        <Stack.Screen name="BrandDetails2" component={BrandDetails2} />
        <Stack.Screen name="CampaignForm" component={CampaignForm} />
        <Stack.Screen name="CampaignForm1" component={campaignForm1} />
        <Stack.Screen name="CampaignForm2" component={campaignForm2} />
        <Stack.Screen name="CampaignForm3" component={campaignForm3} />
        {/* <Stack.Screen name="campaignForm4" component={CampaignForm4 }/> */}
        <Stack.Screen name="campaignForm5" component={campaignForm5} />
        <Stack.Screen name="campaignForm6" component={campaignForm6} />
        {/* <Stack.Screen name="campaignForm7" component={campaignForm7 }/> */}
        <Stack.Screen name="campaignForm8" component={campaignForm8} />
        <Stack.Screen name="Phantom" component={Phantom} />
      </Stack.Navigator>
    </NavigationContainer>
  );     
};


export default App;