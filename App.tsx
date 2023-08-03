import React from 'react';
import {View, Text}from 'react-native';

const App = () => {
  return ( 
    <View className="margin-4px">
      <Text>T O D O</Text>
      <View>
        <Text  className="text-lg text-white">Create new ToDo item</Text>
      </View>
    </View>
    
  );
}

export default App;