import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import BotTabNavigator from '../components/BotTabNavigator';
import MainTabNavigator from '../components/BotTabNavigator';
import { styles } from '../themes/dark';

const Tab = createBottomTabNavigator();

interface MainScreenProps {
    navigation: any;
  }
  
  const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    return (
      <View style={{ flex:1}}>
            <MainTabNavigator />        
      </View>
    );
  };
  
  export default MainScreen;