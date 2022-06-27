import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

const { width } = Dimensions.get('screen');

const ProfileScreen = ({ navigation }) => {

    const [isLogout, setIsLogout] = useState(false);

    function userInfo() {
        return (
            <View style={styles.profileInfoContainerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/user/user_3.jpg')}
                        style={{ height: 55.0, width: 55.0, borderRadius: 27.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ ...Fonts.black22Bold, marginLeft: Sizes.fixPadding }}>
                        Ellison Perry
                    </Text>
                </View>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={{ ...Fonts.primaryColorBold }}>Edit Profile</Text>
                </TouchableOpacity>

            </View>
        )
    }

    function divider() {
        return (
            <View style={{ height: 1.00, backgroundColor: Colors.lightGray }}></View>
        )
    }

    function title({ title }) {
        return (
            <Text style={{
                ...Fonts.black20Bold,
                marginVertical: Sizes.fixPadding + 5.0,
                marginHorizontal: Sizes.fixPadding * 2.0
            }}>
                {title}
            </Text>
        )
    }

    function infoAll({ icon, backColor, frontColor, title, }) {

        return (
            <View style={styles.infoContainerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        ...styles.infoContainerCircleStyle,
                        backgroundColor: backColor,
                        borderColor: frontColor,
                    }}>
                        {icon}
                    </View>
                    <Text style={{ ...Fonts.black16Bold, marginLeft: Sizes.fixPadding }}>
                        {title}
                    </Text>
                </View>
                <Feather name="chevron-right" size={24} color="black" />
            </View>
        )

    }

    function shortDivider() {
        return (
            <View style={{
                height: 0.50,
                backgroundColor: Colors.lightGray,
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding
            }}></View>
        )
    }

    function logOutDialog() {
        return (
            <Dialog.Container visible={isLogout}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', }}>
                    <Text style={{ ...Fonts.black18Bold, paddingBottom: Sizes.fixPadding - 5.0, }}>
                        You are sure want to logout?
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: Sizes.fixPadding * 2.0
                    }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => setIsLogout(false)}
                            style={styles.cancelButtonStyle}
                        >
                            <Text style={{ ...Fonts.black20Regular }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={() => {
                                setIsLogout(false)
                                navigation.navigate('Welcome')
                            }}
                            style={styles.logOutButtonStyle}
                        >
                            <Text style={{ ...Fonts.white20Regular }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    return <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
        <StatusBar translucent={false} backgroundColor={Colors.primary} />
        <ScrollView>
            {userInfo()}
            {divider()}
            {title({ title: 'Account Info' })}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('ClientDirectory')}>
                {infoAll(
                    {
                        icon: <Ionicons name="person" size={20} color={Colors.primary} />,
                        backColor: '#E9EBFE',
                        frontColor: Colors.primary,
                        title: 'Client Directory',

                    }
                )}
            </TouchableOpacity>
            {infoAll(
                {
                    icon: <FontAwesome5 name="clipboard-list" size={20} color='#F44336' />,
                    backColor: '#FDE3E1',
                    frontColor: '#F44336',
                    title: 'My History',

                }
            )}
            {shortDivider()}
            {title({ title: 'About App' })}
            {infoAll(
                {
                    icon: <FontAwesome name="tag" size={24} color='#FF9800' />,
                    backColor: '#FFF0D9',
                    frontColor: '#FF9800',
                    title: 'Coupen Codes',

                }
            )}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('AboutUs')}>
                {infoAll(
                    {
                        icon: <MaterialCommunityIcons name="hand-pointing-up" size={29} color={Colors.primary} />,
                        backColor: '#E9EBFE',
                        frontColor: Colors.primary,
                        title: 'About Us',
                    }
                )}
            </TouchableOpacity>
            {infoAll(
                {
                    icon: <Ionicons name="star-outline" size={20} color="#60B864" />,
                    backColor: '#E4F3E5',
                    frontColor: '#60B864',
                    title: 'Rate Us',
                }
            )}
            {infoAll(
                {
                    icon: <Ionicons name="md-help-circle-outline" size={29} color='#F44336' />,
                    backColor: '#FDE3E1',
                    frontColor: '#F44336',
                    title: 'Help',
                }
            )}
            {shortDivider()}
            <TouchableOpacity
                style={{ marginTop: Sizes.fixPadding }}
                activeOpacity={0.9}
                onPress={() => setIsLogout(true)}
            >
                {infoAll(
                    {
                        icon: <Ionicons name="log-in-outline" size={29} color='#42B1A6' />,
                        backColor: '#D9EFED',
                        frontColor: '#42B1A6',
                        title: 'Logout',
                    }
                )}
            </TouchableOpacity>
        </ScrollView>
        {logOutDialog()}
    </SafeAreaView>
}

ProfileScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

const styles = StyleSheet.create({
    profileInfoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding
    },
    infoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 3.0
    },
    infoContainerCircleStyle: {
        height: 52.0, width: 52.0, borderRadius: 26.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.0
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 90,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0
    },
    cancelButtonStyle: {
        flex: 0.50,
        backgroundColor: Colors.lightGray,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
        marginRight: Sizes.fixPadding + 5.0,
    },
    logOutButtonStyle: {
        flex: 0.50,
        backgroundColor: Colors.primary,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding + 5.0
    }
})

export default ProfileScreen;