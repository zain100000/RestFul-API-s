import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Modal, TextInput} from 'react-native';

const DeleteUpdateUserWithApi = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      alert('User Deleted');
      getApiData();
    }
  };

  const updateUser = item => {
    setShowModal(true);
    setSelectedUser(item);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', color: '#000', fontSize: 30}}>
        List With Api
      </Text>

      <View style={styles.container}>
        <View style={styles.datawrapper}>
          <View style={{flex: 8}}>
            <Text style={{fontSize: 22, color: '#000', fontWeight: '500'}}>
              Name
            </Text>
          </View>
          <View style={{flex: 6}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '500',
                marginLeft: -56,
              }}>
              Age
            </Text>
          </View>
          <View style={{flex: 6}}>
            <Text style={{fontSize: 22, color: '#000', fontWeight: '500'}}>
              Ops
              {'\n'}
            </Text>
          </View>
        </View>

        {data.length
          ? data.map(item => (
              <View style={styles.datawrapper}>
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
                    {item.name}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
                    {item.age}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Button title="Delete" onPress={() => deleteUser(item.id)} />
                </View>
                <View style={{flex: 1}}>
                  <Button title="Update" onPress={() => updateUser(item)} />
                </View>
              </View>
            ))
          : null}
      </View>

      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
      </Modal>
    </View>
  );
};

const UserModal = props => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);

  const updateData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {'Content-Type': 'Application/Json'},
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    if (result) {
      alert('User Updated');
    }
  };

  return (
    <View style={styles.centeredview}>
      <View style={styles.modalview}>
        <TextInput
          style={{
            color: '#000',
            fontSize: 20,
            borderColor: '#000',
            borderWidth: 2,
            marginBottom: 20,
            width: 300,
            padding: 20,
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
            width: 300,
            padding: 20,
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
            width: 300,
            padding: 20,
          }}
          placeholder="Enter Email"
          placeholderTextColor={'#000'}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View style={{marginBottom: 15}}>
          <Button title="Update" onPress={() => updateData()} />
        </View>
        <Button title="Close" onPress={() => props.setShowModal(false)} />
      </View>
    </View>
  );
};

export default DeleteUpdateUserWithApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 'auto',
  },

  datawrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
    padding: 5,
  },

  centeredview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalview: {
    backgroundColor: '#999',
    padding: 40,
    borderWidth: 2,
    elevation: 5,
    shadowOpacity: 0.7,
    borderRadius: 10,
  },
});
