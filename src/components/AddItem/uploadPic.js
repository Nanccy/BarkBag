import React, { Component } from 'react';
import {

    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ListView,
    AppRegistry,
    AsyncStorage

} from 'react-native';
import axios from 'axios'

class uploadPic extends Component {
    async componentWillMount() {
        const data = await axios.get('http://188.166.239.144:8000/api/599fca839347ae26554fedaf')
        console.log(data)
    }

    render() {
        return (
            <Image source={require("../../images/bg1.png")} style={styles.container}>
                <View style={styles.SquareBackground}>
                    <View>
                        <Image source={require("../../images/picture.png")} style={{ height: 100, width: 100 }} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input}
                            placeholder='Item name'>
                        </TextInput>

                        <TextInput  style={styles.inputDes}
                            placeholder='Description'>
                        </TextInput>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>
                                Add Item
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    SquareBackground: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        // margin: 30,
        // paddingLeft: 30,
        // paddingRight: 30,
        width: 300,
        height: 300,
        backgroundColor: "rgba(44, 62, 80,0.5)"
    },
    fontTopic: {
        fontSize: 25,
        color: 'white'
    },
    viewStyle2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    viewItem: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 16,
        margin: 16,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    
    backgroundImages: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',

    },
    inputContainer: {

        marginTop: 5,
        padding: 30,
        alignSelf: 'stretch',
        

    },
    input: {
        color: 'white',
        fontSize: 16,
        height: 50,
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0)',
    
    },
     inputDes: {
        color: 'white',
        fontSize: 16,
        height: 80,
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0)',
    
    },
    buttonContainer: {
        backgroundColor: "#0D9092",
        paddingVertical: 10,
        //margin: 30,
    },
    buttonText: {
        textAlign: "center",
        color: "#FFFF",
        fontSize: 15
    },
    
});
export default uploadPic;