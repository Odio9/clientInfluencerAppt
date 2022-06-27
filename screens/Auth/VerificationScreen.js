import React, { useState } from "react";
import { Text, View, SafeAreaView, ImageBackground, StatusBar, TextInput, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, Sizes } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import { CircleFade } from 'react-native-animated-spinkit';

const { width } = Dimensions.get('screen');

const VerificationScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);

    function passwordInfo() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: Sizes.fixPadding * 5.0,
            }}>

                <View style={styles.textFielContainerStyle}>
                    <TextInput
                        style={{ ...Fonts.white20Regular, }}
                        onChangeText={() => { this.secondTextInput.focus(); }}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.textFielContainerStyle}>
                    <TextInput
                        style={{ ...Fonts.white20Regular, }}
                        ref={(input) => { this.secondTextInput = input; }}
                        keyboardType="numeric"
                        onChangeText={() => { this.thirdTextInput.focus(); }}
                    />
                </View>

                <View style={styles.textFielContainerStyle}>
                    <TextInput
                        style={{ ...Fonts.white20Regular, }}
                        keyboardType="numeric"
                        ref={(input) => { this.thirdTextInput = input; }}
                        onChangeText={() => { this.forthTextInput.focus(); }}

                    />
                </View>

                <View style={styles.textFielContainerStyle}>
                    <TextInput
                        style={{ ...Fonts.white20Regular, }}
                        keyboardType="numeric"
                        ref={(input) => { this.forthTextInput = input; }}
                        onChangeText={() => {
                            setIsLoading(true);
                            setTimeout(() => {
                                setIsLoading(false);
                                navigation.navigate('Register');
                            }, 2000);
                        }}
                    />
                </View>
            </View>
        )
    }

    function resendInfo() {
        return (
            <View style={styles.resendInfoContainerStyle}>
                <Text style={{ ...Fonts.grayRegular }}>Didn't receive OTP Code!</Text>
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.white17Bold }}>Resend</Text>
            </View>
        )
    }

    function loading() {
        return (
            <Dialog.Container
                visible={isLoading}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <CircleFade size={48} color="#1976D2" />
                    <Text style={{ ...Fonts.gray16Regular, paddingBottom: Sizes.fixPadding - 5.0, marginTop: Sizes.fixPadding * 2.0 }}>Please Wait...</Text>
                </View>
            </Dialog.Container>
        );
    }

    function submitButton() {
        return (
            <TouchableOpacity activeOpacity={0.9}
                onPress={() => navigation.navigate('Register')}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['rgba(68,114,152,0.99)', 'rgba(25,118,210,0.5)',]}
                    style={styles.submitButtonContainerStyle}
                >
                    <Text style={{ ...Fonts.white16Regular }}>
                        Submit
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
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
                    <ScrollView>
                        <Ionicons
                            name="arrow-back-sharp"
                            size={24}
                            color="white"
                            style={{ marginTop: Sizes.fixPadding * 6.0 }}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={{ ...Fonts.white30Bold, marginTop: Sizes.fixPadding * 4.0, }}>
                            Verification
                        </Text>
                        <Text style={{ ...Fonts.white16Regular, marginTop: Sizes.fixPadding }}>
                            Enter the OTP code from the phone we just sent you.
                        </Text>
                        {passwordInfo()}
                        {resendInfo()}
                        {submitButton()}
                    </ScrollView>
                </LinearGradient>
            </ImageBackground>
            {loading()}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    textFielContainerStyle: {
        height: 60.0,
        width: 60.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: "rgba(255,255,255,0.25)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    resendInfoContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding * 4.0
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 90,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    submitButtonContainerStyle: {
        paddingVertical: Sizes.fixPadding + 5.0,
        borderRadius: Sizes.fixPadding * 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 3.0,
    }
})

VerificationScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default VerificationScreen;