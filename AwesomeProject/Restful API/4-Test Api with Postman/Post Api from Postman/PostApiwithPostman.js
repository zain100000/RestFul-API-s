import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const FetchApiwithPostman = () => {
  const data = {
    name: 'Tony',
    age: 24,
    email: 'Tony@gmail.com',
  };

  const saveApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'Application/Json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', color: '#000', fontSize: 30}}>
        Post JSON Server Api
      </Text>
      <Button title={'Save Data'} onPress={() => saveApiData()} />
    </View>
  );
};

export default FetchApiwithPostman;

const styles = StyleSheet.create({});
