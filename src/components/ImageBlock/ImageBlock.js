import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class ImageBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLink: {
                uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG966Z887cAhUJMt8KHW6OCUAQjRx6BAgBEAU&url=https%3A%2F%2Faminoapps.com%2Fc%2Fanime%2Fpage%2Fblog%2Fpokomon-pikachu%2FBJtw_udqxreebkqD62KkKRxEmb3Ko5&psig=AOvVaw3fugcrp4qcYJ056WwJpQQA&ust=1533317555322040'
            },
            imageFile: require('../../../assets/images/red_heart.png')
        }
    }

    render() {
        let img = this.props.source ? this.props.source : this.state.imageFile;
        
        return (
            <View style={styles.container} >
                <Image source={img} style={styles.images}/>
                <Text >Hello From ImageBlock Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
    },
    image: {
        width: '80%',
        height: 50,
    }
});
