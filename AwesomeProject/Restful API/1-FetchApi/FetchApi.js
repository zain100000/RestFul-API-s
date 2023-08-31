import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FetchApi = () => {
  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    // api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
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
      {data ? (
        <View>
          <Text>{data.userId}</Text>
          <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default FetchApi;

const styles = StyleSheet.create({});
