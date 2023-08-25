import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, Alert } from 'react-native';

const InstagramProfileScraping = () => {
  const [usernames, setUsernames] = useState('');

  const handleScrapeProfiles = async () => {
    try {
      const usernamesList = usernames.split('\n').filter((username) => username.trim() !== '');

      if (usernamesList.length !== 1000) {
        Alert.alert('Error', 'Please enter exactly 1000 Instagram usernames.');
        return;
      }

      const response = await axios.post('http://your-backend-api/scrape-instagram-profiles', {
        usernames: usernamesList,
      });

      // Handle the response data from the backend (e.g., display the results to the user)
    } catch (error) {
      console.error('Error while scraping Instagram profiles:', error);
    }
  };

  return (
    <View>
      <TextInput
        multiline
        value={usernames}
        onChangeText={(text) => setUsernames(text)}
        placeholder="Enter 1000 Instagram usernames (one username per line)"
      />
      <Button title="Scrape Profiles" onPress={handleScrapeProfiles} />
    </View>
  );
};

export default InstagramProfileScraping;
