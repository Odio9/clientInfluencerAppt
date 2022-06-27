import { AntDesign } from '@expo/vector-icons';
import { Fonts, Colors, Sizes, } from "../../constant/styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { Snackbar } from 'react-native-paper';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TransitionPresets } from 'react-navigation-stack';

const rowTranslateAnimatedValues = {};

const NotificationScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [snackBarMsg, setSnackBarMsg] = useState('');

    const [listData, setListData] = useState(
        [
            {
                key: '1',
                name: 'Booking Success',
                description: 'Your have successfully booked appointment.OrderId:OID1256789',
                icon: <FontAwesome5 name="calendar-alt" size={28} color="white" />
            },
            {
                key: '2',
                name: '25% Off use code InfluencerPro25',
                description: 'Use code InfluencerPro25 for your booking appintment between 20th sept to 25th oct and get 25% off.',
                icon: <AntDesign name="tag" size={28} color="white" />
            },
            {
                key: '3',
                name: 'Flat %10 Off',
                description: 'Use code Influencer10 and get $10 off on your appointment booking',
                icon: <AntDesign name="tag" size={28} color="white" />
            },
        ],
    );

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {

        const { key, value } = swipeData;

        if (
            value < -Dimensions.get('window').width &&
            !animationIsRunning.current
        ) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {

                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = listData.find(item => item.key === key);

                setSnackBarMsg(`${removedItem.name} dismissed`);

                setListData(newData);

                setShowSnackBar(true);

                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 120],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.notificationContainerStyle}>
                    <View style={styles.notificationIconContainerStyle}>
                        {data.item.icon}
                    </View>
                    <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.black16Bold }}>{data.item.name}</Text>
                        <Text numberOfLines={3} style={{ ...Fonts.gray14Regular, marginTop: Sizes.fixPadding - 5.0, textAlign: 'justify' }}>{data.item.description}</Text>
                    </View>
                </View>
            </View>
        </Animated.View>
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
        </View>
    );

    return (
        <View style={styles.container}>
            {listData.length == 0 ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="ios-notifications-off" size={70} color="gray" />
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding * 2.0 }}>No Notifications</Text>
                </View>
                :
                <SwipeListView
                    disableRightSwipe
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-Dimensions.get('window').width}
                    onSwipeValueChange={onSwipeValueChange}
                    useNativeDriver={false}
                />
            }
            <Snackbar
                style={{ position: 'absolute', bottom: -10.0, left: -10.0, right: -10.0, backgroundColor: '#333333' }}
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
            >
                {snackBarMsg}
            </Snackbar>
        </View>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    notificationContainerStyle: {
        height: 100.0,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 2.0,
        paddingLeft: Sizes.fixPadding,
        paddingRight: 100.0,
    },
    notificationIconContainerStyle: {
        height: 70.0,
        width: 70.0,
        backgroundColor: '#1976D2',
        borderRadius: 35.0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: Sizes.fixPadding,

    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        marginVertical: Sizes.fixPadding,
    },
})

NotificationScreen.navigationOptions = {
    title: 'Notifications',
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    ...TransitionPresets.SlideFromRightIOS,
}
