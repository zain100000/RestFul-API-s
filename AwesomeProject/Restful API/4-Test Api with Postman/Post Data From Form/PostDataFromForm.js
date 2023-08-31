import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const PostDataFromForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const saveApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:name, age:age, email:email}),
    });
    result = await result.json();
    if(result){
        alert('Data Saved');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', color: '#000', fontSize: 30}}>
        Post Data from Form{'\n'}
      </Text>

      <View style={{flex: 1}}>
        <TextInput
          style={{
            color: '#000',
            fontSize: 20,
            borderColor: '#000',
            borderWidth: 2,
            marginBottom: 20,
          }}
          placeholder="Enter Name"
          placeholderTextColor={'#000'}
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={{
            color: '#000',
            fontSize: 20,
            borderColor: '#000',
            borderWidth: 2,
            marginBottom: 20,
          }}
          placeholder="Enter Age"
          placeholderTextColor={'#000'}
          onChangeText={text => setAge(text)}
          value={age}
        />
        <TextInput
          style={{
            color: '#000',
            fontSize: 20,
            borderColor: '#000',
            borderWidth: 2,
            marginBottom: 20,
          }}
          placeholder="Enter Email"
          placeholderTextColor={'#000'}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <Button title="Save Data" onPress={saveApiData} />
      </View>
    </View>
  );
};

export default PostDataFromForm;

const styles = StyleSheet.create({});
