import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


 class LoginScreen extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.formWrapper}
                >
                    <Text style={styles.welcomeText}>
                        Welcome Back User
                    </Text>
                    <View
                         style={styles.formRow}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Username"
                            placeholderTextColor="#333"
                        />
                    </View>

                    <View
                         style={styles.formRow}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Password"
                            placeholderTextColor="#333"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.signinBtn}
                    >
                        <Text
                            style={styles.signinText}
                        >Sign In</Text>
                    </TouchableOpacity>
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
    },
    welcomeText: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold"
    },
    signinBtn: {
        backgroundColor: "blue",
        paddingVertical:10,
        borderRadius: 20,
        marginTop:10
    },
    signinText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold"
    }
})

