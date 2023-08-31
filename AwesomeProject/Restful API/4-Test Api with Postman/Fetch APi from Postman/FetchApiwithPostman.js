import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const FetchApiwithPostman = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', color: '#000', fontSize: 30}}>
        Call JSON Server Api
      </Text>

      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 20, color: '#000'}}>Id: {item.id}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>Name: {item.name}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>Age: {item.age}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>Email: {item.email}
              {'\n'}
              {'\n'}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default FetchApiwithPostman;

const styles = StyleSheet.create({});
