import React from "react";
import { Image, View, } from "react-native";

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/images/icon.png')}
                style={{ height: 100.0, width: 100.0, borderRadius: 70.0 }}
                resizeMode="contain"
            >
            </Image>
        </View>
    )
}

export default SplashScreen;