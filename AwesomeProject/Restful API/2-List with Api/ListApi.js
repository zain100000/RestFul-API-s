import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ListApi = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    // api call
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
        Api Call
      </Text>
      {data.length
        ? data.map(item => (
            <View>
              <Text style={{fontSize: 20, color: '#000'}}>id : {item.id}</Text>
              <Text style={{fontSize: 20, color: '#000'}}>
                title : {item.title}
              </Text>
              <Text style={{fontSize: 20, color: '#000'}}>
                body : {item.body}
                {'\n'}
                {'\n'}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default ListApi;

const styles = StyleSheet.create({});
