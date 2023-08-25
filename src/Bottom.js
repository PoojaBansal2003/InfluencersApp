import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const BottomBar = () => {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => handleHeartPress()}>
          <Icon name="heart" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCrossPress()} style={styles.cross}>
          <Icon name="times" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  export default BottomBar;

  const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 552,
        // backgroundColor: 'white',
        position: 'absolute',
        top: 1,
        left: 100,
        right:100,
      },
      cross:{
        marginLeft: -20,
      }
  })