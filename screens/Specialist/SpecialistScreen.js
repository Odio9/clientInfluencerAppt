import React from "react";
import { Text, View, StyleSheet, TextInput, Image, FlatList, StatusBar, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const SpecialistScreen = ({ navigation }) => {

    const type = navigation.getParam('name');

    const influencersList = [
        {
            id: '1',
            name: 'Nathaly Paris',
            yearsOfExperience: 10,
            rating: 6.8,
            reviews: 590,
            image: require('../../assets/images/influencer/influencer_1.png')
        },
        {
            id: '2',
            name: 'David Hilton',
            yearsOfExperience: 8,
            rating: 5.7,
            reviews: 450,
            image: require('../../assets/images/influencer/influencer_2.png')
        },
        {
            id: '3',
            name: 'Alex Delta',
            yearsOfExperience: 7,
            rating: 5.5,
            reviews: 490,
            image: require('../../assets/images/influencer/influencer_3.png')
        },
        {
            id: '4',
            name: 'Greg London',
            yearsOfExperience: 6,
            rating: 5.0,
            reviews: 450,
            image: require('../../assets/images/influencer/influencer_4.png')
        },
        {
            id: '5',
            name: 'John Cairo',
            yearsOfExperience: 15,
            rating: 4.9,
            reviews: 512,
            image: require('../../assets/images/influencer/influencer_5.png')
        },
        {
            id: '6',
            name: 'Paul Beshir',
            yearsOfExperience: 4,
            rating: 4.4,
            reviews: 200,
            image: require('../../assets/images/influencer/influencer_6.png')
        },
        {
            id: '7',
            name: 'Christ Hani',
            yearsOfExperience: 7,
            rating: 4.6,
            reviews: 250,
            image: require('../../assets/images/influencer/influencer_7.png')
        },
        {
            id: '8',
            name: 'Tellar Ring',
            yearsOfExperience: 2,
            rating: 4.2,
            reviews: 80,
            image: require('../../assets/images/influencer/influencer_8.png')
        },
    ];

    function header() {
        return <View style={styles.headerContainerStyle}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('BottomTabScreen')} />
            <Text style={{ ...Fonts.black20Bold, marginLeft: Sizes.fixPadding * 2.0 }}>{type}</Text>
        </View>
    }


    function search() {
        return (
            <View style={styles.headerSearchStyle}>
                <Ionicons name="search" size={24} color="gray" />
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder={`Search ${type}`}
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                    />
                </View>
            </View>
        )
    }

    function influencers() {

        const renderItem = ({ item }) => {
            return (
                <View style={{ justifyContent: 'center', marginTop: 15.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.influencerImageContainerStyle}>
                            <Image
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    height: 109.0, width: 109.0, borderRadius: 75.0,
                                    overflow: 'hidden',
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ ...Fonts.black16Bold }}>{item.name}</Text>
                            <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>{type}</Text>
                            <Text style={{ ...Fonts.primaryColor16Regular, marginTop: Sizes.fixPadding - 7.0 }}>
                                {item.yearsOfExperience} Years Experience
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Sizes.fixPadding - 7.0 }}>
                                <FontAwesome name="star" size={20} color="#CDDC39" />
                                <Text style={{ ...Fonts.black16Regular, marginLeft: Sizes.fixPadding, marginRight: Sizes.fixPadding * 2.0 }}>
                                    {item.rating}
                                </Text>
                                <MaterialIcons name="rate-review" size={24} color="gray" />
                                <Text style={{ ...Fonts.black16Regular, marginLeft: Sizes.fixPadding }}>
                                    {item.reviews} Reviews
                                </Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.bookContainerStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate('TimeSlots', {
                            image: item.image,
                            name: item.name,
                            type: type,
                            experience: item.yearsOfExperience,
                            rating: item.rating,
                        })}>
                            <View style={styles.bookVideoConsultButtonStyle}>
                                <Text style={{ ...Fonts.orangeColorBold }}>Book Video Consult</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('TimeSlots', {
                            image: item.image,
                            name: item.name,
                            type: type,
                            experience: item.yearsOfExperience,
                            rating: item.rating,
                        })}>
                            <View style={styles.bookAppointmentButtonStyle}>
                                <Text style={{ ...Fonts.primaryColorBold }}>Book Appointment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.dividerStyle}>
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                data={influencersList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
            />
        )
    }

    return <SafeAreaView style={{ flex: 1, }} backgroundColor="rgba(0,0,0,0)">
        <StatusBar backgroundColor={Colors.primary} />
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {header()}
            {search()}
            {influencers()}
        </View>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding,
    },
    headerContainerStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding,
        alignItems: 'center'
    },
    influencerImageContainerStyle: {
        height: 110.0,
        width: 110.0,
        borderRadius: 75.0,
        backgroundColor: 'white',
        borderColor: '#B3BCFC',
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
    },
    bookContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    bookVideoConsultButtonStyle: {
        width: width / 2 - 30,
        borderColor: '#FF9B07',
        borderWidth: 1.0,
        backgroundColor: '#FFEDD2',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    },
    bookAppointmentButtonStyle: {
        width: width / 2 - 30,
        borderColor: Colors.primary,
        borderWidth: 1.0,
        backgroundColor: '#E3E6FE',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    },
    dividerStyle: {
        backgroundColor: Colors.lightGray,
        height: 0.80,
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})

SpecialistScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default SpecialistScreen;