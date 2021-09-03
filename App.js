import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {LinearTextGradient} from 'react-native-text-gradient';

import HomePage from './src/features/pages/screens/HomePage';
import EventsPage from './src/features/pages/screens/EventsPage';
// import EventsPage from './src/features/pages/screens/EventsPage';
import SponsorsPage from './src/features/pages/screens/SponsorsPage';
import TeamPage from './src/features/pages/screens/TeamPage';
import ContactPage from './src/features/pages/screens/ContactPage';
import DevelopersPage from './src/features/pages/screens/DevelopersPage';

import Colors from './src/utilities/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoleSelectionPage from './src/features/pages/screens/RoleSelectionPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerHeader(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Blithchron"
        pressOpacity={0}
        pressColor={Colors.white}
        labelStyle={{
          color: Colors.white,
          fontSize: 25,
          textAlign: 'center',
          fontWeight: '700',
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    // <LinearTextGradient
    //   style={{fontWeight: 'bold', fontSize: 72}}
    //   locations={[0, 1]}
    //   colors={['red', 'blue']}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 0}}>
    //   <Text>Blithchron</Text>
    // </LinearTextGradient>
    // <Text>Blithchron</Text>
  );
}

function App() {
  const firstTime = true;
  return (
    <NavigationContainer>
      {firstTime ? (
        <Stack.Navigator>
          <Stack.Screen
            name="ROLE_SELECTION"
            component={RoleSelectionPage}
            options={{
              title: 'Role Selection',
              headerShown: false,
            }}></Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={props => <DrawerHeader {...props} />}
          initialRouteName="Home"
          screenOptions={({navigation}) => ({
            drawerStyle: {
              backgroundColor: Colors.primaryDark,
            },
            drawerActiveBackgroundColor: Colors.primarySolid,
            drawerActiveTintColor: Colors.white,
            drawerInactiveTintColor: Colors.white,
            drawerLabelStyle: {
              fontSize: 18,
              fontWeight: '700',
            },
            // Screen styles
            headerTitle: '',
            headerStyle: {
              backgroundColor: Colors.primarySolid,
            },

            // Hamburger menu icon
            headerLeft: () => (
              <Icon
                onPress={() => navigation.toggleDrawer()}
                size={24}
                color={Colors.white}
                name="menu"
              />
            ),
            headerLeftContainerStyle: {
              padding: '2.5%',
            },
          })}>
          <Drawer.Screen
            name="HOME_PAGE"
            component={HomePage}
            options={{title: 'Home'}}
          />
          <Drawer.Screen
            name="EVENTS_PAGE"
            component={EventsPage}
            options={{title: 'Events'}}
          />
          <Drawer.Screen
            name="SPONSOR_PAGE"
            component={SponsorsPage}
            options={{title: 'Sponsors'}}
          />
          <Drawer.Screen
            name="CAMPUS_AMBASSADOR_PAGE"
            component={CampusAmbassadorPage}
            options={{title: 'Campus Ambassador'}}
          />
          <Drawer.Screen
            name="TEAM_PAGE"
            component={TeamPage}
            options={{title: 'Our Team'}}
          />
          <Drawer.Screen
            name="CONTACT_PAGE"
            component={ContactPage}
            options={{title: 'Contact Us'}}
          />
          <Drawer.Screen
            name="DEVELOPER_PAGE"
            component={DevelopersPage}
            options={{title: 'Developers'}}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
