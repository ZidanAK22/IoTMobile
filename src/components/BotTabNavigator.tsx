import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import BmiScreen from '../screens/BmiScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const MainTabNavigator = () => {
  return (
    // Javascript style. Error is from TypeScript. 
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused
            ? 'home'            
            : 'home-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'abacus' : 'abacus';
          } else if (route.name === 'Bmi Calculator') {
            iconName = focused ? 'abacus' : 'abacus';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'head' : 'head-outline';
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size}/>;

        },
        tabBarActiveTintColor: 'cornflowerblue',              
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Calculator" 
        component={CalculatorScreen} 
      />
      <Tab.Screen 
      name="Bmi Calculator" 
      component={BmiScreen}     
      
      />
      <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      />      
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
