import React from "react";
import { StyleSheet } from "react-native";
import { View, Button, Text, Pressable
} from "react-native";
import { GiFeather } from "react-icons/gi"
import { TbScribble } from "react-icons/tb";


function LoginPage() {
  return (
    <View style={styles.loginHeader}>
      <View style={styles.logoView}>
        <GiFeather style={styles.logo}>Logo here!</GiFeather>
        <TbScribble style={styles.scribble} />
      </View>
      <Pressable style={styles.loginButton} >
        <Text>Login</Text>
      </Pressable>       
   </View>
  );
}

export default LoginPage;


const styles = StyleSheet.create({
  loginHeader: {
    backgroundColor: "pink",
    width: '100vw',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16px',
    '&.first-child': {
    }
  },
  logoView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    height: '48px',
    width: '48px',
    transform: 'rotate(-25deg)',
  },
  scribble: {

  },
  loginButton: {
    borderRadius: '16px',
    fontFamily: 'Lexend Mega',
    backgroundColor: 'orange',
    padding: '8px'
  }
});
