import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Card = ({ name, bio }) => {
    return (
      <View style={styles.card}>
        <Image
          source={require('./assets/download.jpeg')} // Replace with the actual path to your image
          style={styles.cardImage}
          resizeMode="cover" // Adjust the resizeMode as needed
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.bioText}>{bio}</Text>
        </View>
        <View style={styles.iconContainer}>
        <Icon name="instagram" size={30} color="white" />
      </View>
      </View>
    );
  };
 export default Card; 

 const styles = StyleSheet.create({
   cardImage: {
     flex: 1,
     width: '100%',
     height: '100%',
     borderRadius: 30,
   },
   card: {
     flex: 1,
     borderRadius: 70,
    //  borderColor: 'black',
    //  borderWidth: 1,
     overflow: 'hidden',
     marginLeft: 15,
     marginRight: 15,
     padding: 15,
     backgroundColor: 'white',
   },
   infoContainer: {
     position: 'absolute',
     bottom: 0,
     padding: 10,
     borderRadius: 100,
   },
   nameText: {
     color: 'white',
     fontSize: 30,
     fontWeight: 'bold',
     marginLeft: 20,
    //  marginBottom: 30,
   },
   bioText: {
     color: 'white',
     fontSize: 20,
     marginLeft: 20,
     marginBottom: 30,
   },
   iconContainer: {
     position: 'absolute',
     top: 395,
     right: 25,
    //  backgroundColor: 'black', // Adjust the background color and opacity as needed
     borderRadius: 50,
     padding: 5,
     marginRight: 290,
     marginTop: -86,
     
   },
 });