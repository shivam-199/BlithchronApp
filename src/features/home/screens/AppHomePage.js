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

import HomePage from '../../pages/screens/HomePage';
import EventsPage from '../../pages/screens/EventsPage';
import CampusAmbassadorPage from '../../pages/screens/CampusAmbassadorPage';
import SponsorsPage from '../../pages/screens/SponsorsPage';
import TeamPage from '../../pages/screens/TeamPage';
import ContactPage from '../../pages/screens/ContactPage';
import DevelopersPage from '../../pages/screens/DevelopersPage';

import Colors from '../../../utilities/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoleSelectionPage from '../../pages/screens/RoleSelectionPage';

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

// cccs: component class with constuctor
class AppHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    const {auth} = this.props;
    const {rolePrefDefined, userRole} = auth;

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
                ? PageRoutes.Drawer.CAPage
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
            <Drawer.Screen
              name={PageRoutes.Drawer.EventsPage}
              component={EventsPage}
              options={{title: 'Events'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.SponsorsPage}
              component={SponsorsPage}
              options={{title: 'Sponsors'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.CAPage}
              component={CampusAmbassadorPage}
              options={{title: 'Campus Ambassador'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.TeamPage}
              component={TeamPage}
              options={{title: 'Our Team'}}
            />
            <Drawer.Screen
              name={PageRoutes.Drawer.ContactPage}
              component={ContactPage}
              options={{title: 'Contact Us'}}
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
