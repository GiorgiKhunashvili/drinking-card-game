import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Modal, Button } from 'react-native';


const EditName = (props) => {
    const [name, setChangedName] = useState(props.name);
    console.log(props.name)
    return (
        <Modal visible={props.visable} animationType="slide">
            <View style={styles.viewConainer}>
                <TextInput
                    style={styles.nameEditInput}
                    placeholder="edit name"
                    onChangeText={(newName) => setChangedName(newName)}
                    value={name}
                />
                <Button title="Edit" onPress={() => {
                    props.onNameChange(props.id, name);
                    props.onCloseModal();
                }} />
                <Button title="Close" onPress={() => props.onCloseModal()} />
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
        height: 50,
        width: "70%",
        borderBottomWidth: 1,
        fontSize: 20

    }

});


export default EditName;