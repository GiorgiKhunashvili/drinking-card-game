import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import NameItem from '../components/NameItem';
import NameInput from '../components/NameInput';

const AddPlayers = () =>  {
  const [namesList, setNameInListNames] = useState([]);
  console.log(namesList)
  const addNameHandler = (name) => {
    if(name !== ""){
      setNameInListNames([...namesList, { key: Math.random().toString(), value: name }]);
    }
  }

  const removeNameHandler = nameID => {
    setNameInListNames(currentName => {
      return currentName.filter((name) => name.key !== nameID);
    })
  }

  const editNameHandler = (nameID, changedName) => {
    setNameInListNames(currentName => {
      return currentName.filter((name) => {
        if(name.key === nameID) {
          return name.value = changedName;
        }else {
          return name;
        }
      })
    })
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
      <NameInput onAddName={addNameHandler} />
      <StatusBar style="auto" />
      <FlatList
        data={namesList}
        renderItem={itemData => <NameItem id={itemData.item.key} name={itemData.item.value} onNameChange={editNameHandler} onDelete={removeNameHandler} />}
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
    width: "100%",
    backgroundColor: "white"
  }
});


export default AddPlayers;