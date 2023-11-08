import * as React from 'react';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',    
    },
  
    login: {      
      backgroundColor: 'black',
      padding:30,            
    },

    textinput: {      
    },
  
    bmi: {
      padding:20,
    },
  
    merahbadag: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 30,
      width:200,
      backgroundColor: 'magenta'
    },
  
    birubadag: {
      color: 'black',
      fontSize:50,    
      textShadowRadius: 10,
      marginTop:50,
      textAlign: 'center',
    },
  
    logo: {
      flex: 1,
      width: null,
      height: 200,
      resizeMode: 'contain',
      margin:'auto',    
      alignContent: 'center',
    },

    input:{
      borderColor: 'black',
      borderRadius: 10,
      color: 'black',
      padding: 40,
    },

    operators:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    roundbtn:{    
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 30,
      marginTop: 10,
      marginBottom: 10,
    },

    operator:{
      color: 'white',
      fontSize: 18,
      padding: 2,
      margin: 1,
    },

    profile:{    
      fontFamily: 'serif',
      flex:1,               
    },

    profilepicture:{
      height:200,
      width:200,
      borderRadius: 100, // half the height and width for circle. Or 50% in css.            
      resizeMode: 'contain',
      margin:10,            
    },

    profilecontent:{
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'tomato',  
    },
    
    banner:{
      opacity: 0.5,    
    }
}); 
