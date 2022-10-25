import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// Screens
import Trainer_Trainee_Page from './TraineePages/Trainee_MyProgress_Page';
import Trainer_Home_Page from './TraineePages/Trainee_Home_Page';
import Trainer_Profile_Page from './TraineePages/Trainee_Profile_Page';
import Trainer_Schedule_Page from './TraineePages/Trainee_Schedule_Page';
import Trainer_Notifications_Page from './TraineePages/Trainee_Notifications_Page';

//Screen name
const trainee = "Trainees";
const home = "Home";
const profile = "Profile";
const schedule = "Schedule";
const notification = "Notifications";

const Tab = createBottomTabNavigator();

function TrainerNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home';

            } else if (rn === trainee) {
              iconName = focused ? 'chart-area' : 'chart-area';

            } else if (rn === profile) {
              iconName = focused ? 'user-tie' : 'user-tie';

            } else if (rn === schedule) {
              iconName = focused ? 'calendar-alt' : 'calendar-alt';

            } else if (rn === notification) {
              iconName = focused ? 'bell' : 'bell';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#989090',
          labelPosition: 'below-icon',

          labelStyle: { paddingBottom: 10, fontSize: 10, },
          style: { backgroundColor: 'tomato', paddingTop: 20, height: 80, },
          tabStyle: {
            height: 70,
            backgroundColor: '#121928',
          },


        }}>

        <Tab.Screen name={home} component={Trainer_Home_Page} />
        <Tab.Screen name={trainee} component={Trainer_Trainee_Page} />
        <Tab.Screen name={schedule} component={Trainer_Schedule_Page} />
        <Tab.Screen name={profile} component={Trainer_Profile_Page} />
        <Tab.Screen name={notification} component={Trainer_Notifications_Page} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TrainerNavBar;