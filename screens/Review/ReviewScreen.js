import React from "react";
import { Text, View, StatusBar, FlatList, Image, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { FontAwesome } from '@expo/vector-icons';

const userList = [
    {
        id: '1',
        image: require('../../assets/images/user/user_1.jpg'),
        name: 'Ersel',
        date: 'August 2021',
        review: 'Excellent influencer.',
    },
    {
        id: '2',
        image: require('../../assets/images/user/user_2.jpg'),
        name: 'Jane',
        date: 'August 2021',
        review: 'Great Influencer I have ever met.',
    },
    {
        id: '3',
        image: require('../../assets/images/user/user_3.jpg'),
        name: 'Apollonia',
        date: 'July 2021',
        review: 'Excellent',
    },
    {
        id: '4',
        image: require('../../assets/images/user/user_4.jpg'),
        name: 'Beatriz',
        date: 'June 2022',
        review: 'Really nice!',
    },
    {
        id: '5',
        image: require('../../assets/images/user/user_5.jpg'),
        name: 'Linnea',
        date: 'May 2022',
        review: 'Nice experience.',
    },
    {
        id: '6',
        image: require('../../assets/images/user/user_6.jpg'),
        name: 'Linnea',
        date: 'April 2022',
        review: 'Fantastic.',
    },
    {
        id: '7',
        image: require('../../assets/images/user/user_7.jpg'),
        name: 'Brayden',
        date: 'February 2022',
        review: 'Very experienced Influencer.',
    },
    {
        id: '8',
        image: require('../../assets/images/user/user_8.jpg'),
        name: 'Hugo',
        date: 'January 2022',
        review: 'Good.',
    }
];

const ReviewScreen = () => {

    const renderItem = ({ item }) => (
        <View style={styles.reviewInfoContainerStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                    source={item.image}
                    style={{ width: 80.0, height: 80.0, borderRadius: Sizes.fixPadding * 4.0, }}
                    resizeMode="contain"
                />
                <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
                    <Text style={{ ...Fonts.black16Bold }}>{item.name}</Text>
                    <Text style={{ ...Fonts.gray14Regular }}>{item.date}</Text>
                    <View style={styles.ratingContainerStyle}>
                        <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                        <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                        <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                        <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                        <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                    </View>
                </View>
            </View>
            <Text style={{ ...Fonts.black16Regular, marginTop: Sizes.fixPadding }}>
                {item.review}
            </Text>
        </View>
    )

    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor={Colors.primary} />
        <FlatList
            data={userList}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: Sizes.fixPadding * 2.0, }}
        />
    </View>
}

const styles = StyleSheet.create({
    reviewInfoContainerStyle: {
        borderWidth: 1.0,
        borderColor: Colors.lightGray,
        padding: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding + 5.0,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 3.0,
        backgroundColor: 'white',
        marginBottom: Sizes.fixPadding * 2.0,
    },
    ratingContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding - 5.0
    }
})

ReviewScreen.navigationOptions = {
    title: `${userList.length} Review Found`,
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    headerStyle: {
        backgroundColor: 'white',
        //elevation: 0,
    },
}

export default ReviewScreen;