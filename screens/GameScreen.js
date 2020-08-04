import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GameScreen = ({ navigation }) => {
    const players = navigation.getParam("players");
    const [playerNumber, setPlayerNumber] = useState(0);
    const texts = [
        '$NAME აილოკე იღლია ან დალიე სამი ჭიქა',
        '$NAME შეაგინე ღმერთს ან დალიე 5 ჭიქა',
        '$NAME ღმერთის წყალობით ყველაფერი კარგად იქნება მარა 2 ჭიქას სვამ'
    ]
    const displayText = (playerNumber) => {
        return texts[playerNumber].replace("$NAME", players[playerNumber].value)
    }
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.text}>{displayText(playerNumber)}</Text>
            <TouchableOpacity onPress={() => {
                if(players.length - 1 === playerNumber){
                    setPlayerNumber(0);
                }else {
                    setPlayerNumber(playerNumber + 1);
                }
            }}>
                <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 50
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButton: {
        fontSize: 40,
        width: 200,
        height: 50,
        borderRadius:5,
        backgroundColor: '#DCDCDC',
        textAlign:'center'
    }
});


export default GameScreen;