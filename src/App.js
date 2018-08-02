import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pic1: {
                uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG966Z887cAhUJMt8KHW6OCUAQjRx6BAgBEAU&url=https%3A%2F%2Faminoapps.com%2Fc%2Fanime%2Fpage%2Fblog%2Fpokomon-pikachu%2FBJtw_udqxreebkqD62KkKRxEmb3Ko5&psig=AOvVaw3fugcrp4qcYJ056WwJpQQA&ust=1533317555322040'
            }
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text >Open up App.js to start working on your app!</Text>
                <Text >Hello Patrick && Ted && Allen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
