import React from "react";
import { Text, View, TextInput, StatusBar, FlatList, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ViewAllScreen = ({ navigation }) => {

    function header() {
        return <View style={styles.headerStyle}>
            <View style={styles.headerTitleContainerStyle}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('BottomTabScreen')} />
                <Text style={{ ...Fonts.black20Bold, marginLeft: Sizes.fixPadding * 2.0 }}>Speciality</Text>
            </View>
            <View style={styles.headerSearchStyle}>
                <Ionicons name="search" size={24} color="gray" />
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Search Specialities"
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                    />
                </View>
            </View>
        </View>
    }

    const specialistsList = [
        {
            id: '1',
            name: 'Aquarist',
            image: require('../../assets/images/icons/aquarium.png'),
        },
        {
            id: '2',
            name: 'Chef',
            image: require('../../assets/images/icons/food.png'),
        },
        {
            id: '3',
            name: 'Fashion Designer',
            image: require('../../assets/images/icons/fashion.png'),
        },
        {
            id: '4',
            name: 'Gardener',
            image: require('../../assets/images/icons/garden.png'),
        },
        {
            id: '5',
            name: 'Terrarrium Designer',
            image: require('../../assets/images/icons/terrarrium.png'),
        },
        {
            id: '6',
            name: 'Videographer',
            image: require('../../assets/images/icons/videography.png'),
        },
        {
            id: '7',
            name: 'Motivation Speech',
            image: require('../../assets/images/icons/motivation.png'),
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                underlayColor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('Specialist', { name: item.name })}
            >
                <View style={styles.specialistStyle}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{ height: 80.0, width: 80.0 }}
                    />
                    <Text style={styles.specialistTextStyle}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    function specialities() {
        return <View style={{ backgroundColor: '#FAF9F7', flex: 1, paddingTop: Sizes.fixPadding, }}>
            <FlatList
                data={specialistsList}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, }}
            />
        </View>
    }

    return <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.primary} />
        {header()}
        {specialities()}
    </View>
}

const styles = StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    specialistStyle: {
        height: 170.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 5.0,
    },
    headerStyle: {
        backgroundColor: 'white',
        paddingTop: Sizes.fixPadding + 5.0,
        paddingBottom: Sizes.fixPadding
    },
    headerTitleContainerStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 10.0
    },
    specialistTextStyle: {
        ...Fonts.black16Bold,
        marginTop: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
        textAlign: 'center'
    }
})

ViewAllScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default ViewAllScreen;