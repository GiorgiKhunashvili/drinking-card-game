import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import NameItem from './components/NameItem';
import NameInput from './components/NameInput';

export default function App() {
  const [namesList, setNameInListNames] = useState([]);

  const addNameHandler = (name) => {
    if(name !== ""){
      setNameInListNames([...namesList, { key: Math.random().toString(), value: name }]);
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
      <NameInput onAddName={addNameHandler} />
      <StatusBar style="auto" />
      <FlatList
        data={namesList}
        renderItem={itemData => <NameItem name={itemData.item.value} />}
        showsHorizontalScrollIndicator={false}
      />

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: "100%",
    width: "100%"
  }
});
