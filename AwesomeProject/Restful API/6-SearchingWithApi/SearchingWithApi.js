import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const SearchingWithApi = () => {
  const [data, setData] = useState([]);

  const searchUser = async text => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: '#000',
          fontWeight: '600',
          marginBottom: 40,
        }}>
        Searching With Api
      </Text>

      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'black',
          padding: 20,
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 20,
        }}
        placeholder="Search"
        placeholderTextColor={'black'}
        onChangeText={text => searchUser(text)}
      />

      <View style={styles.container}>
        <View style={styles.datawrapper}>
          <View style={{flex: 8}}>
            <Text style={{fontSize: 22, color: '#000', fontWeight: '500', marginLeft: 10,}}>
              Name
            </Text>
          </View>
          <View style={{flex: 6}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '500',
                marginLeft: -35,
              }}>
              Age
            </Text>
          </View>
          <View style={{flex: 6}}>
            <Text style={{fontSize: 22, color: '#000', fontWeight: '500'}}>
              Emails
              {'\n'}
            </Text>
          </View>
        </View>
      </View>

      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
                {item.age}
              </Text>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
                {item.email}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchingWithApi;

const styles = StyleSheet.create({
  datawrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    padding: 5,
  },
});
