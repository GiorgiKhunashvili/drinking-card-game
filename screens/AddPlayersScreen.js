import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
      <TouchableOpacity style={styles.startGameContainer}>
          <Text style={styles.startGameText}>Start Game</Text>
          <AntDesign name="rocket1" size={50} color="black" />
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  startGameContainer: {
        height: 50,
        width: "100%",
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#DCDCDC',
        marginBottom: 50,
        borderRadius: 5,
        marginTop: 10
  },
  startGameText: {
      fontSize: 40
  }
});


export default AddPlayers;