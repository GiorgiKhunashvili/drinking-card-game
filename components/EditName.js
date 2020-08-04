import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Modal, Button, TouchableOpacity } from 'react-native';


const EditName = (props) => {
    const [name, setChangedName] = useState(props.name);

    return (
        <Modal visible={props.visable} animationType="slide">
            <View style={styles.viewConainer}>
                <Text style={styles.screenTitle}>Change Player Name</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}     
                    style={styles.nameEditInput}
                    placeholder="edit name"
                    onChangeText={(newName) => setChangedName(newName)}
                    value={name}
                />
                <TouchableOpacity onPress={() => {
                    props.onNameChange(props.id, name);
                    props.onCloseModal();
                }}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onCloseModal()}>
                    <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    viewConainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    nameEditInput: {
        height: 60,
        width: "70%",
        borderBottomWidth: 1,
        fontSize: 40,
        textAlign: "center"
    },
    closeButton: {
        fontSize: 30,
        color: "red"
    },
    editButton: {
        fontSize: 30,
        color: "#1d3ed1",
        marginTop: 10,
        marginBottom: 5
    }, 
    screenTitle: {
        fontSize: 35,

        color: "black"
    }
});


export default EditName;