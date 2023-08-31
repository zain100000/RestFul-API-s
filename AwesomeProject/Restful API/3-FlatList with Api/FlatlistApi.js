import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FlatlistApi = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
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
        FlatList with Api
      </Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 20, color: '#000'}}>{item.id}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>{item.title}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>
                {item.body}
                {'\n'}
                {'\n'}
              </Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default FlatlistApi;

const styles = StyleSheet.create({});
