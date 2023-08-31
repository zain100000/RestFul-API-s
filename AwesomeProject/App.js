import React from 'react';
import {View, Text} from 'react-native';
// import FetchApi from './Restful API/FetchApi/FetchApi';
// import ListApi from './Restful API/List with Api/ListApi';
// import FlatlistApi from './Restful API/3-FlatList with Api/FlatlistApi';
// import FetchApiwithPostman from './Restful API/4-Test Api with Postman/Fetch APi from Postman/FetchApiwithPostman';
// import PostApiwithPostman from './Restful API/4-Test Api with Postman/Post Api from Postman/PostApiwithPostman';
// import PostDataFromForm from './Restful API/4-Test Api with Postman/Post Data From Form/PostDataFromForm';
// import DeleteUpdateUserWithApi from './Restful API/5-List with Api/DeleteUpdateUserWithApi';
import SearchingWithApi from './Restful API/6-SearchingWithApi/SearchingWithApi';



const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <FetchApi /> */}
      {/* <ListApi /> */}
      {/* <FlatlistApi /> */}
      {/* <FetchApiwithPostman /> */}
      {/* <PostApiwithPostman /> */}
      {/* <PostDataFromForm /> */}
      {/* <DeleteUpdateUserWithApi /> */}
      <SearchingWithApi />
    </View>    
  );
};

export default App;
