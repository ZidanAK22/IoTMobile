import React from 'react';
import { ScrollView, TextInput, Text, Button } from 'react-native';
import {styles} from '../themes/dark';
import Logo from '../components/Logo';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.login}>
      <Logo url="https://i.imgur.com/0kiEJK5.png" />
      <Text style={styles.birubadag}>Login</Text>
      <TextInput placeholder="Username" style={styles.textinput} />
      <TextInput placeholder="Password" style={styles.textinput} />
      <Button onPress={() => navigation.navigate('Main')} title="Click Me!" />
    </ScrollView>
  );
};

export default LoginScreen;
