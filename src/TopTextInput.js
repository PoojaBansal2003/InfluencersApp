import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBox = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

  const handleSearchTextChange = text => {
    setSearchText(text);
  };

  const toggleOptionsList = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = selectedOption => {
    setSearchText(selectedOption);
    setShowOptions(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleOptionSelect(item)}
      style={styles.optionItem}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <TextInput
          style={{
            flex: 1,
            height: 50,
            borderColor: 'gray',
            borderWidth: 0.5,
            paddingLeft: 10,
            // borderRadius: 10,
           
          }}
          value={searchText}
          onChangeText={handleSearchTextChange}
          placeholder="Search..."
        />
        <TouchableOpacity onPress={toggleOptionsList} style={{marginLeft: 10}}>
          <Icon name={showOptions ? 'caret-up' : 'caret-down'} size={20} style={{marginLeft: -40}} />
        </TouchableOpacity>
      </View>
      {showOptions && (
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item}
          style={{maxHeight: 150}}
        />
      )}
      <StatusBar backgroundColor="gray"
      barStyle = "light-content"
     
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffff',
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 10,
    marginBottom: 3,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    
  },
});

export default TopBox;
