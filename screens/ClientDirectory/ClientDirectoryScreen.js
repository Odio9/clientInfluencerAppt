import React from "react";
import { Text, View, StatusBar, FlatList, Image, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TransitionPresets } from 'react-navigation-stack';

const clientList = [
    {
        id: '1',
        name: 'Allison Perry',
        image: require('../../assets/images/user/user_3.jpg')
    },
    {
        id: '2',
        name: 'John Smith',
        image: null,
    }
];

const ClientDirectoryScreen = () => {

    function clients() {
        const renderItem = ({ item }) => {
            return (
                <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: Sizes.fixPadding - 5.0 }}>
                    <View style={styles.clientImageContainer}>
                        {
                            item.image === null ? <Ionicons name="person" size={24} color="gray" /> : <Image
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    height: 80.0, width: 80.0, borderRadius: Sizes.fixPadding * 4.0,
                                }}
                            />
                        }
                    </View>
                    <Text style={{ ...Fonts.black16Bold, marginLeft: Sizes.fixPadding, marginBottom: Sizes.fixPadding }}>
                        {item.name}
                    </Text>
                </View>
            )
        }
        return (
            <View>
                <FlatList
                    data={clientList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding * 2.0, paddingVertical: Sizes.fixPadding * 2.0, }}
                />


            </View>

        );
    }

    function addButton() {
        return (
            <View style={styles.addButtonStyle}>
                <MaterialIcons name="add" size={30} color="white" />
            </View>
        )
    }

    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor={Colors.primary} />
        {clients()}
        {addButton()}
    </View>

}

const styles = StyleSheet.create({
    clientImageContainer: {
        height: 80.0,
        width: 80.0,
        borderRadius: Sizes.fixPadding * 4.0,
        backgroundColor: '#F5F5F5',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.lightGray,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 2.0,
        overflow: 'hidden',
    },
    addButtonStyle: {
        backgroundColor: '#2196F3',
        width: 60.0,
        height: 60.0,
        borderRadius: Sizes.fixPadding * 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Sizes.fixPadding * 2.0,
        right: Sizes.fixPadding * 2.0,
        elevation: 10.0
    }
})

ClientDirectoryScreen.navigationOptions = {
    title: 'Client Directory',
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    ...TransitionPresets.SlideFromRightIOS,
}

export default ClientDirectoryScreen;