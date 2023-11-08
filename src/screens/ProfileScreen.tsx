import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import {styles} from '../themes/dark';
import Logo from '../components/Logo';
import ProfilePicture from '../components/ProfilePicture';

interface ProfileScreenProps {
  navigation: any; //actually navigation or smth else, idk
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.profile}>
      <ScrollView scrollIndicatorInsets={{ top:0, left:0, bottom:0, right:0 }} contentContainerStyle={styles.profilecontent}>
        <ProfilePicture url='https://i.imgur.com/0kiEJK5.png'/>      
        <ProfilePicture url='https://i.imgur.com/0kiEJK5.png'/>
        <ProfilePicture url='https://i.imgur.com/0kiEJK5.png'/>
        <ProfilePicture url='https://i.imgur.com/0kiEJK5.png'/>
        <ProfilePicture url='https://i.imgur.com/0kiEJK5.png'/>        
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;