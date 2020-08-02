import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const NameItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10, 
        backgroundColor: '#ccc',
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius:4
      },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default NameItem;