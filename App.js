import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  const [namesList, setNameInListNames] = useState([]);


  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText)
  }

  const addNameHandler = () => {
    setNameInListNames([...namesList, { key: Math.random().toString(), value: enteredName }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}        
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
          onEndEditing={addNameHandler}
        />
        <Button title="ADD" onPress={addNameHandler} />
        <StatusBar style="auto" />
      </View>
      <FlatList

        data={namesList}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  input: {
    width: "70%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10
  },
  listItem: {
    padding: 10, 
    backgroundColor: '#ccc',
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius:4
  }
});
