import React from 'react'
import LoginPage from './src/pages/Common/LoginPage/LoginPage'
import ForgotPasswordPage from './src/pages/Common/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from './src/pages/Common/ResetPasswordPage/ResetPasswordPage'
import TraineeHomeScreen from './src/pages/Trainer/TraineePages/Trainee_Home_Page'
// import TraineeFeedbackScreen from './src/pages/Trainer/TraineePages/Trainee_Feedback_Screen'

import StartPage from './src/pages/Common/StartPage/StartPage'
// import { NavigationContainer } from '@react-navigation/native';
import SetupProfilePage from './src/pages/Common/SetupProfilePage/SetupProfilePage'
import SetupPasswordPage from './src/pages/Common/SetupPasswordPage/SetupPasswordPage'
import AppoinmentGuidePage from './src/pages/Common/AppoinmentGuidePage/AppoinmentGuidePage'
import ExploreAppPage from './src/pages/Common/ExploreAppPage/ExploreAppPage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TraineeNavBar from './src/pages/Trainee/TraineeNavBar'
import TrainerNavBar from './src/pages/Trainer/TraineeNavBar'
// import ProfilePage from './src/pages/Common/ProfilePage'
import MyAppointment from './src/pages/Trainer/TraineePages/Trainee_Appointment'
import WorkoutAssistent from './src/pages/Trainer/TraineePages/Trainee_Workout_Assistant'
import Announcement from './src/pages/Trainer/TraineePages/Trainee_Announcements'
import Payments from './src/pages/Trainer/TraineePages/Trainee_Payments'
import Notifications from './src/pages/Trainer/TraineePages/Trainee_Notifications_Page'


import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
const Stack = createNativeStackNavigator();
const App = () => {

  return (

    <TrainerNavBar />


    // <NavigationContainer>
    //   <Stack.Navigator>

    //     <Stack.Screen
    //       name="<MyAppointments>"
    //       component={Notifications}

    //       options={{ title: 'Startup' }}
    //     />
    //     <Stack.Screen name="Login" component={LoginPage} />
    //     <Stack.Screen name="Forgot" component={ForgotPasswordPage} />
    //     <Stack.Screen name="Reset" component={ResetPasswordPage} />
    //     <Stack.Screen name="Setup" component={SetupProfilePage} />
    //     <Stack.Screen name="SetupPw" component={SetupPasswordPage} />
    //     <Stack.Screen name="Guide" component={AppoinmentGuidePage} />
    //     <Stack.Screen name="Explore" component={ExploreAppPage} />
    //     <Stack.Screen name="TraineeHome" component={TraineeHomeScreen} />
    //     {/* <Stack.Screen name="TraineeFeedback" component={TraineeFeedbackScreen} /> */}
    //     {/* <Stack.Screen name="Profile" component={ProfilePage} /> */}

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  // root:{
  //   flex:1,
  // }
});
export default App;