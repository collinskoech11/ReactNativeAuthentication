import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


 class LoginScreen extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.formWrapper}
                >
                    <View
                         style={styles.formRow}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Username"
                            placeholderTextColor="#333"
                        />
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        width: "90%"
    },
    formRow: {
        marginBottom: 10
    },
    textInput: {
        backgroundColor: "#ddd",
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "#333"
    }
})

