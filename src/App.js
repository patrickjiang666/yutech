import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
import ImageBlock from './components/ImageBlock/ImageBlock';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: require('../assets/images/poko.png')
        }
    }

    onBtnPress = () => {
        alert("button click");
        console.log('button');
        
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.line}>
                    <Text>{"Open up App.js to start working on your app!"}</Text>
                </View>
                <ImageBlock source={this.state.image} style={styles.imageBlock}/>
                <View style={styles.line}>
                    <Text>{"Hello Patrick && Ted && Allen"}</Text>
                </View>
                <View style={styles.button}>
                    <Button 
                        onPress={this.onBtnPress}
                        title="Click Me"
                        color={'#16a085'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
        width: '100%'
    },
    imageBlock: {
        flex: 2
    },
    button: {
        height: 70,
        width: '100%',
        borderTopWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});
