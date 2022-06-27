import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';
import BottomTabScreen from "./navigation/BottomTab";
import LoadingScreen from './components/LoadingScreen';
import NotificationScreen from './screens/Notifications/NotificationScreen';
import SearchScreen from "./screens/Search/SearchScreen";
import ViewAllScreen from './screens/ViewAll/ViewAllScreen';
import SpecialistScreen from './screens/Specialist/SpecialistScreen';
import TimeSlotScreen from './screens/TimeSlots/TimeSlotsScreen';
import ConsultaionScreen from './screens/ConsultationDetail/ConsultationDetailScreen';
import PaymentMethodScreen from './screens/PaymentMethod/PaymentMethodScreen';
import InfluencerProfileScreen from './screens/InfluncerProfile/InfluencerProfileScreen';
import ReviewScreen from './screens/Review/ReviewScreen';
import MessageScreen from './screens/Message/MessageScreen';
import EditProfileScreen from './screens/EditProfile/EditProfileScreen';
import ClientDirectoryScreen from './screens/ClientDirectory/ClientDirectoryScreen';
import AboutUsScreen from './screens/AboutUs/AboutUsScreen';
import WelcomeScreen from './screens/Auth/WelcomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegisterScreen from './screens/Auth/RegisterScreen';
import VerificationScreen from './screens/Auth/VerificationScreen';
import SplashScreen from './screens/SplashScreen';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  ])

const navigator = createAppContainer(
  createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    mainFlow: createStackNavigator({
      Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
          headerShown: false
        }
      },
      Register: RegisterScreen,
      Verification: VerificationScreen,
      Splash: SplashScreen,
      BottomTabScreen: {
        screen: BottomTabScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
      Notification: NotificationScreen,
      Search: SearchScreen,
      ViewAll: ViewAllScreen,
      Specialist: SpecialistScreen,
      TimeSlots: TimeSlotScreen,
      Consultation: ConsultaionScreen,
      PaymentMethod: PaymentMethodScreen,
      InfluencerProfile: InfluencerProfileScreen,
      Review: ReviewScreen,
      Message: MessageScreen,
      EditProfile: EditProfileScreen,
      ClientDirectory: ClientDirectoryScreen,
      AboutUs: AboutUsScreen,
    }),
  },
    {
      initialRouteName: 'LoadingScreen',
      defaultNavigationOptions: {
        //header: () => null
        title: 'InfluencerPro'
      }
    })
)

const App = navigator;

export default () => {
  return <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
}
//console.ignoredYellowBox = ['Calling getNode()']






