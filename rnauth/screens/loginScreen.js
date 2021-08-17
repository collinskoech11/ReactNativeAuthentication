import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export class loginScreen extends React.Component {
    render() {
        return (
            <View
                styes={styles.container}
            >
                <Text>Login Screen </Text>
            </View>
        )
    }
}

export default loginScreen;

const styles = StyleSheet.create({
    container: {
        height: "99%",
        alighItems: "center",
        justifyContent: "center",
        color:"black"
    }
})

