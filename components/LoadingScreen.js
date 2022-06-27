
import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import SplashScreen from "../screens/SplashScreen";

export default class LoadingScreen extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            NotoSans_Bold: require("../assets/fonts/NotoSans-Bold.ttf"),
            NotoSans_Regular: require("../assets/fonts/NotoSans-Regular.ttf"),
        });
        this.props.navigation.navigate("Welcome");
    }

    render() {
        return (
            <View style={styles.container}>
                <SplashScreen />
            </View>
        )
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
