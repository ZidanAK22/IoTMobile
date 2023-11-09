import React from 'react';
import { ScrollView, View, Text, Button, Pressable, Image } from 'react-native';
import {styles} from '../themes/dark';
import Logo from '../components/Logo';
import ProfilePicture from '../components/ProfilePicture';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ProfileScreenProps {
  navigation: any; //actually navigation or smth else, idk
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.profile}>
      <ScrollView scrollIndicatorInsets={{ top:0, left:0, bottom:0, right:0 }} contentContainerStyle={styles.profilecontent}>                
          <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>    
          <Text style={{ fontSize:20, color:'cornflowerblue'}}> YeatCat_Tonka123</Text>     
          <View style={{ margin:10, flex:1, flexDirection:'column', justifyContent:'space-evenly'}}>
            <Pressable onPress={() => navigation.navigate('Settings')}>          
              <View style={{ flexDirection:'row', justifyContent:'space-between', width:300, margin:5}}>
                <Text style={{ fontSize:18 }}> Settings</Text>
                <MaterialCommunityIcons name='arrow-right-circle' size={25}/>
              </View>            
            </Pressable>                    
            <Pressable onPress={() => navigation.navigate('PrivacySettings')}>          
              <View style={{ flexDirection:'row', justifyContent:'space-between', width:300, margin:5}}>
                <Text style={{ fontSize:18 }}> Privacy Settings</Text>
                <MaterialCommunityIcons name='arrow-right-circle' size={25}/>
              </View>            
            </Pressable>                 
          </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;