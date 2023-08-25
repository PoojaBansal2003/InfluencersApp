import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CampaignListScreen from '../screens/CampaignList';
import MenuScreen from '../screens/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, StatusBar } from 'react-native';
const Tab = createBottomTabNavigator();
const TabNavigator = ({props}) => {
  return (
    <View  style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor="white" />
      <View style ={styles.container1}>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
      <Tab.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CampaignList"
        component={CampaignListScreen}
        options={{
          tabBarLabel: 'CampaignList',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container1:{
    flex:1,
    
    
  }
  
})