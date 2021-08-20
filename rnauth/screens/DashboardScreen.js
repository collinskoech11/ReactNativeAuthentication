import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


 class DashboardScreen extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.dashboardWrapper}>
                    <Text
                        style={styles.userText}
                    >Hey User</Text>
                </View>
               <TouchableOpacity style={styles.logoutBtn}>
                   <Text style={styles.logoutBtnText}>Logout</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    dashboardWrapper: {

    },
    userText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },
    logoutBtn: {
        backgroundColor: "red",
        paddingVertical: 10,
        width: 100,
        borderRadius: 10
    },
    logoutBtnText: {
        color:"#fff",
        textAlign:"center",
        fontWeight:"bold"
    }
})

