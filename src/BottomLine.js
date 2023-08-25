import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const TopTextInput = () => {
    const [isListVisible, setIsListVisible] = useState(false);
  
    const handleArrowPress = () => {
      setIsListVisible(!isListVisible);
    };
  
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput />
          <TouchableOpacity onPress={handleArrowPress} style={styles.arrowContainer}>
            <Icon name="caret-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {isListVisible && (
          <View style={styles.listContainer}>
            {/* Your list components go here */}
            <Text>List of items</Text>
          </View>
        )}
      </View>
    );
  };
  export default TopTextInput;

  const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius:10
      }, 
      
      arrowContainer: {
        paddingVertical:20,
        margin:5
      },
      listContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        elevation: 2,
      },
  })