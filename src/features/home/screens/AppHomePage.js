import {bindActionCreators} from 'redux';
import * as authAction from '../../auth/redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';

import ROLES from '../../../constants/Roles';
import PageRoutes from '../../../constants/PageRoutes';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ScreenStyles from './styles/StylesAppHomePage';

import HomePage from '../../pages/screens/HomePage';
// import EventsPage from '../../pages/screens/EventsPage';
import SponsorsPage from '../../pages/screens/SponsorsPage';
import ContactPage from '../../pages/screens/ContactPage';
import DevelopersPage from '../../pages/screens/DevelopersPage';
import RoleSelectionPage from '../../pages/screens/RoleSelectionPage';
import LoginPage from '../../auth/Screens/LoginPage';
import AboutUsPage from '../../pages/screens/AboutUsPage';
import CampusAmbassadorPage from '../../pages/screens/CampusAmbassadorPage';
import CampusAmbassadorHomePage from '../../pages/screens/CampusAmbassadarHomePage';
import CampusAmbassadorTaskPage from '../../pages/screens/CampusAmbassadorTaskPage';
import CampusAmbassadorCompletedTasksPage from '../../pages/screens/CampusAmbassadorCompletedTasksPage';
import CampusAmbassadorReturnedTasksPage from '../../pages/screens/CampusAmbassadorReturnedTasksPage';
import CampusAmbassadorPinnedTasksPage from '../../pages/screens/CampusAmbassadorPinnedTasksPage';

import {LinearTextGradient} from 'react-native-text-gradient';
import SplashScreen from 'react-native-splash-screen';
import {Text} from 'react-native';

import Colors from '../../../utilities/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CANavigator(props) {
  const CANavigator = createStackNavigator();
  const isLoggedIn = props.route.params.isLoggedIn;
  return (
    <CANavigator.Navigator
      initialRouteName={
        isLoggedIn ? PageRoutes.Drawer.CAHomePage : PageRoutes.Drawer.CAMainPage
      }
      screenOptions={() => ({
        headerTitle: '',
        headerShown: false,
      })}>
      <CANavigator.Screen
        // Where the Login, Register, T&C pages
        name={PageRoutes.Drawer.CAMainPage}
        component={CampusAmbassadorPage}
      />
      <CANavigator.Screen
        // Where the leaderboard and tasks are shown
        name={PageRoutes.Drawer.CAHomePage}
        component={CampusAmbassadorHomePage}
      />
      <CANavigator.Screen
        name={PageRoutes.Drawer.CATaskPage}
        component={CampusAmbassadorTaskPage}
      />
      <CANavigator.Screen
        name={PageRoutes.Drawer.LoginPage}
        component={LoginPage}
      />
      <CANavigator.Screen
        name={PageRoutes.Drawer.CACompletedTaskPage}
        component={CampusAmbassadorCompletedTasksPage}
      />
      <CANavigator.Screen
        name={PageRoutes.Drawer.CAReturnedTaskPage}
        component={CampusAmbassadorReturnedTasksPage}
      />
      <CANavigator.Screen
        name={PageRoutes.Drawer.CAPinnedTaskPage}
        component={CampusAmbassadorPinnedTasksPage}
      />
    </CANavigator.Navigator>
  );
}

function DrawerHeader(props) {
  const {state, ...rest} = props;
  const newState = state;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => (
          <LinearTextGradient
            style={ScreenStyles.textGradient}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text>Blithchron</Text>
          </LinearTextGradient>
        )}
        pressColor={Colors.primaryDark}
      />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
}

// cccs: component class with constuctor
class AppHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAuth = () => {};

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    const {auth} = this.props;
    const {rolePrefDefined, userRole, isLoggedIn} = auth;

    return (
      <NavigationContainer>
        {!rolePrefDefined ? (
          <Stack.Navigator>
            <Stack.Screen
              name={PageRoutes.Stack.RoleSelection}
              component={RoleSelectionPage}
              options={{
                title: 'Role Selection',
                headerShown: false,
              }}></Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            drawerContent={props => <DrawerHeader {...props} />}
            initialRouteName={
              userRole == ROLES.ca
                ? PageRoutes.Drawer.CAAuth
                : PageRoutes.Drawer.HomePage
            }
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
              name={PageRoutes.Drawer.HomePage}
              component={HomePage}
              options={{title: 'Home'}}
            />
            {/* <Drawer.Screen
              name={PageRoutes.Drawer.EventsPage}
              component={EventsPage}
              options={{
                title: 'Events',
              }}
            /> */}
            <Drawer.Screen
              name={PageRoutes.Drawer.SponsorsPage}
              component={SponsorsPage}
              options={{title: 'Sponsors'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.CAAuth}
              component={CANavigator}
              initialParams={{
                isLoggedIn,
              }}
              options={{
                title: 'Campus Ambassador',
              }}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.ContactPage}
              component={ContactPage}
              options={{title: 'Contact Us'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.AboutUsPage}
              component={AboutUsPage}
              options={{title: 'About Us'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.DevelopersPage}
              component={DevelopersPage}
              options={{title: 'Developers'}}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = ({auth = {}} = state) => ({auth});

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators({...authAction}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHomePage);
// export default AppHomePage;
