import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const NameInput = (props) => {
    const [enteredName, setEnteredName] = useState('');

    const nameInputHandler = (enteredText) => {
        setEnteredName(enteredText)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}        
                placeholder="Enter name"
                style={styles.input}
                onChangeText={nameInputHandler}
                value={enteredName}
                onEndEditing={() => {
                    props.onAddName(enteredName);
                }}
            />
            <Button title="ADD" onPress={() => {
                props.onAddName(enteredName);
                setEnteredName("");
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      input: {
        width: "70%",
        height: 30,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 10,
        fontSize: 20
      }
})

export default NameInput;