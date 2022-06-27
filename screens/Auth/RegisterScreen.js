import React from "react";
import { Text, View, SafeAreaView, ImageBackground, StatusBar, TextInput, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Sizes } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {

    function userName() {
        return (
            <View style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                // opacity: 0.25,
                borderRadius: 25.0,
                marginTop: Sizes.fixPadding * 5.0,
                paddingVertical: Sizes.fixPadding + 3.0,
                paddingHorizontal: 25.0,
            }}>
                <TextInput
                    placeholder='UserName'
                    style={{ ...Fonts.white16Regular }}
                    placeholderTextColor="white"
                />
            </View>
        )
    }

    function password() {
        return (
            <View style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                // opacity: 0.25,
                borderRadius: Sizes.fixPadding + 15.0,
                marginTop: Sizes.fixPadding * 2.0,
                paddingVertical: Sizes.fixPadding + 3.0,
                paddingHorizontal: Sizes.fixPadding + 15.0,
            }}>
                <TextInput
                    placeholder='Password'
                    style={{ ...Fonts.white16Regular }}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
            </View>
        )
    }

    function email() {
        return (
            <View style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                // opacity: 0.25,
                borderRadius: Sizes.fixPadding + 15.0,
                marginTop: Sizes.fixPadding * 2.0,
                paddingVertical: Sizes.fixPadding + 3.0,
                paddingHorizontal: Sizes.fixPadding + 15.0,
            }}>
                <TextInput
                    placeholder='Email'
                    style={{ ...Fonts.white16Regular }}
                    placeholderTextColor="white"
                />
            </View>
        )
    }

    function continueButton() {
        return (
            <TouchableOpacity activeOpacity={0.9}
                onPress={() => navigation.navigate('BottomTabScreen')}//BottomTabScreen
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['rgba(68,114,152,0.99)', 'rgba(25,118,210,0.5)',]}
                    style={{
                        paddingVertical: Sizes.fixPadding + 5.0,
                        borderRadius: Sizes.fixPadding * 3.0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: Sizes.fixPadding * 5.0,
                    }}
                >
                    <Text style={{ ...Fonts.white16Regular }}>
                        Countinue
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    function confirmPassword() {
        return (
            <View style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                // opacity: 0.25,
                borderRadius: Sizes.fixPadding + 15.0,
                marginTop: Sizes.fixPadding * 2.0,
                paddingVertical: Sizes.fixPadding + 3.0,
                paddingHorizontal: Sizes.fixPadding + 15.0,
            }}>
                <TextInput
                    placeholder='Confirm Password'
                    style={{ ...Fonts.white16Regular }}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/images/influencer_bg.jpg')}
            >

                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={['black', 'rgba(0,0.10,0,0.80)', 'rgba(0,0,0,0.20)',]}
                    style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0 }}
                >
                    <ScrollView style={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                        <Ionicons name="arrow-back-sharp" size={24} color="white" style={{ marginTop: Sizes.fixPadding * 6.0 }}
                            onPress={() => navigation.goBack()} />
                        <Text style={{ ...Fonts.white30Bold, marginTop: Sizes.fixPadding * 4.0, }}>Register</Text>
                        <Text style={{ ...Fonts.white16Regular, marginTop: Sizes.fixPadding }}>Create account</Text>
                        {userName()}
                        {email()}
                        {password()}
                        {confirmPassword()}
                        {continueButton()}
                    </ScrollView>
                </LinearGradient>

            </ImageBackground>

        </SafeAreaView>
    )
}

RegisterScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default RegisterScreen;