import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 

import EditName from './EditName';
const NameItem = (props) => {
    const [modalStatus, setModalStatus] = useState(false);

    const changeModalStatusHandler = () => {
        setModalStatus(false)
    }

    return (
            <View style={styles.listItem}>
                <Text style={styles.text}>{props.name}</Text>
                <EditName visable={modalStatus} onCloseModal={changeModalStatusHandler} onNameChange={props.onNameChange} id={props.id} name={props.name}/>
                <TouchableOpacity onPress={() => setModalStatus(true)}>
                    <SimpleLineIcons name="pencil" size={33} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onDelete(props.id)}>
                    <AntDesign style={styles.deleteButton} name="delete" size={35} color="black" />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10, 
        backgroundColor: '#DCDCDC',
        // borderBottomColor: "black",
        // borderBottomWidth: 1,
        marginVertical: 10,
        borderRadius:4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
    text: {
        fontSize: 24,
        flex: 2,
    },
    deleteButton: {
        color: "black",
        marginLeft: 15
    }
})

export default NameItem;