import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
import ImageBlock from './components/ImageBlock/ImageBlock';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: require('../assets/images/poko.png'),
            title: "Hello"
        }
    }

    onBtnPress = () => {
        alert("button click");
        console.log('button');
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.section, { flex: 1 }]}>
                    <ImageBlock
                        style={styles.logo}
                        source={this.state.image}
                    />

                    <Text style={styles.textLarge}>
                        {this.state.title}
                    </Text>

                    <Text style={styles.textSmall}>
                        (Patrick First React Native App)
                    </Text>
                </View>

                <View style={styles.section}>
                    <Button
                        onPress={this.onBtnPress}
                        title="Press Me"
                        color={'#16a085'}
                        accessibilityLabel="See an informative alert"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
        padding: 10,
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 20,
    },
    textLarge: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    textSmall: {
        color: '#34495e',
        fontStyle: 'italic',
        paddingBottom: 5,
        marginTop: '28%',
    },
});
