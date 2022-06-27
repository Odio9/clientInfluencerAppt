import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Fonts, Sizes } from "../../constant/styles";
import { TransitionPresets } from 'react-navigation-stack';

const AboutUsScreen = () => {
    return (
        <View style={styles.aboutUsContainerStyle}>

            <Text style={{ ...Fonts.black16Regular, textAlign: 'justify' }}>
            We're a group of passionate tech and aquarium nerds. We are artists, highly motivated dreamers and seasoned entrepreneurs connecting influencers with clients.
            </Text>

            <Text style={{ ...Fonts.black16Regular, marginVertical: Sizes.fixPadding + 5.0, textAlign: 'justify' }}>
            Our vision is to create technologies that deliver an extraordinary and immersive experience.
            </Text>

            <Text style={{ ...Fonts.black16Regular, textAlign: 'justify' }}>
            Developed with a dream team of experienced aquarists and software applications.
            </Text>

        </View>
    )
}

AboutUsScreen.navigationOptions = {
    title: 'About Us',
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    ...TransitionPresets.SlideFromRightIOS,
}

const styles = StyleSheet.create({
    aboutUsContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 2.0
    }
})

export default AboutUsScreen;