import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator  } from 'react-native';


 class AuthLoading extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <ActivityIndicator/>
               
            </View>
        )
    }
}

export default AuthLoading;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
   
})

