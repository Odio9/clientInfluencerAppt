import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Fonts, Sizes } from "../../constant/styles";
import TabBarScreen from "../../components/TabBarScreen";

const ScheduleScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: 55.0, justifyContent: 'center' }}>
                <Text style={{ ...Fonts.black20Bold, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                    Appointments
                </Text>
            </View>
            <TabBarScreen />
        </SafeAreaView>
    );
}

ScheduleScreen.navigationOptions = {
    title: 'Appointments',
    headerTitleStyle: { ...Fonts.white20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
    },

}

export default ScheduleScreen;