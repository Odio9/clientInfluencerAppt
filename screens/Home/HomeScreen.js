import React, { useRef, useState, } from "react";
import {
    Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, ImageBackground,
    Image, TouchableHighlight, TouchableOpacity,
    Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import RBSheet from "react-native-raw-bottom-sheet";

const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {

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
            name: 'Terrarrium designer',
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
        }
    ];


    function search() {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Search')

            }}>
                <View style={styles.searchStyle}>
                    <Ionicons name="search" size={24} color="gray" />
                    <Text style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding }}>What type of appointment?</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function newlyLanched() {
        return (
            <ImageBackground
                source={require('../../assets/images/banner.jpg')}
                resizeMode="contain"
                style={{
                    height: 100.0,
                    marginTop: Sizes.fixPadding + 5.0,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                }}
                borderRadius={5}
            >
            </ImageBackground>
        )
    }

    function title({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }

    function specialists() {

        const renderItem = ({ item }) => (
            <TouchableHighlight
                underlayColor="white"
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Specialist', { name: item.name })}
            >
                <View style={styles.specialistInfoContainer}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{ height: 80.0, width: 80.0 }}
                    />
                    <Text style={{
                        ...Fonts.black15Bold,
                        marginTop: Sizes.fixPadding,
                        marginHorizontal: Sizes.fixPadding,
                        textAlign: 'center'
                    }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableHighlight>
        )

        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={specialistsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ marginHorizontal: Sizes.fixPadding }}
            />
        )
    }

    function viewAll() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
                <View style={styles.viewAllStyle}>
                    <Text style={{ ...Fonts.primaryColor17Bold, marginRight: Sizes.fixPadding - 5.0 }}>View All</Text>
                    <Ionicons name="chevron-forward" size={23} color="black" />
                </View>
            </TouchableOpacity>
        );
    }

    function header() {

        const refRBSheet = useRef();
        const [city, setCity] = useState('Calgary');
        const cityList = ['Calgary', 'Toronto', 'Victoria'];

        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        height={200}
                        openDuration={250}
                        customStyles={{
                            container: {
                                paddingHorizontal: Sizes.fixPadding * 2.0,
                            }
                        }}
                    >
                        <View>
                            <Text style={{ ...Fonts.black20Bold, alignSelf: 'center' }}>Choose City</Text>
                            {cityList.map((city) =>
                                <TouchableOpacity
                                    key={city}
                                    onPress={() => {
                                        setCity(city)
                                        refRBSheet.current.close()
                                    }}>
                                    <Text
                                        style={{ ...Fonts.black16Regular, marginVertical: Sizes.fixPadding }}>{city}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </RBSheet>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location-sharp" size={22} />
                        <Text style={{ ...Fonts.black18Regular, marginLeft: 10.0 }}>{city}</Text>
                    </View>
                </TouchableOpacity>
                <Ionicons name="notifications" size={24} color="black" onPress={() => navigation.navigate('Notification')} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <StatusBar translucent={false} backgroundColor={Colors.primary} />
            <FlatList
                ListHeaderComponent={
                    <>
                        {header()}
                        {search()}
                        {newlyLanched()}
                        {title({ title: 'Find your influencer by speciality' })}
                        {specialists()}
                        {viewAll()}
                    </>
                }
             />
        </SafeAreaView>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10.0,
        marginHorizontal: 20.0
    },
    searchStyle: {
        height: 60.0,
        backgroundColor: 'white',
        borderWidth: 1.0,
        borderColor: Colors.lightGray,
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 3.0,
        flexDirection: 'row',
        paddingLeft: Sizes.fixPadding + 10.0,
        marginTop: 20.0,
        marginHorizontal: 20.0
    },
    viewAllStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
    },
    callNowButtonStyle: {
        width: 80.0,
        height: 40.0,
        borderColor: Colors.primary,
        borderRadius: Sizes.fixPadding,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 10.0,
    },
    
    specialistInfoContainer: {
        height: 160.0,
        width: 200.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: 10.0,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5.0,
    }
})

export default HomeScreen;