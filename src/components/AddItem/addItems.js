
import React, { Component } from 'react';
import {

    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ListView

} from 'react-native';
import axios from 'axios'

import { withLayout } from '../utils'
import HomeHeader from '../common/HomeHeader';
import Item from '../item'

class addItems extends Component {
    state = {
        data: [],
        components: []
    }
    async componentWillMount() {
        const result = await axios.get('http://188.166.239.144:8000')
        const data = await result.data
        this.setState('data', data)
    }

    createRow(item) {
        return (
            <View style={styles.item}>
                <Image
                    style={{ width: 150, height: 128 }}
                    source={{ uri: item.link }}
                />
            </View>
        );
    }

    fetchData() {
        
    }

    render() {
        return (
            <Image source={require("../../images/bg1.png")} style={styles.container}>
                <HomeHeader
                    title="Add Items"
                    navigation={this.props.navigation}
                />
                <View style={styles.SquareBackground}>
                    <View style={styles.viewStyle2}>
                        <Text style={styles.fontTopic}>Items Today</Text>
                    </View>
                    {withLayout(styles.viewStyle2)(Item, Item)}
                    {withLayout(styles.viewStyle2)(Item, Item)}
                    <View>
                        <TouchableOpacity style={styles.up}
                            onPress={() => this.props.navigation.navigate('Upload')}>
                            <Text style={styles.text}>Input item</Text>
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
        margin: 30,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "rgba(44, 62, 80,0.5)"
    },
    fontTopic: {
        fontSize: 25,
        color: 'white'
    },
    viewStyle2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewItem: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 16,
        margin: 16,
        flexDirection: 'row',
        backgroundColor: 'rgb(230, 126, 34)'
    },
    up: {
        marginTop: 10,
        backgroundColor: 'rgb(52, 73, 94)',
        width: 200,
        height: 40,
        alignItems: 'center',
    },

    text: {
        marginTop: 10,
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});

export default addItems;