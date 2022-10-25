import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const SetupProfilePage = ({ navigation }) => {


  // const {height} = useWindowDimensions();

  // const onSignInPressed=()=>{
  //     console.warn('Sign in success');
  // }
  // const onForgotPasswordPressed=()=>{
  //     console.warn('forgot');
  // }

  return (

    <View style={styles.root}>

      <Text>
        <Icon name="backward" size={30} color="#fff"
          onPress={() =>
            navigation.navigate('Reset')}
        />
      </Text>
      <View style={styles.content} >
        <Text style={styles.heading1}>Hi! Osthar</Text>
        <Text style={styles.heading1}>Set up Your Profile</Text>

        <View style={styles.continueButton}>
          <CustomButton text="Continue" type="PRIMARY" bgColor="#fff" fgColor="black"
            onPress={() =>
              navigation.navigate('SetupPw', { name: 'Jane' })}
          />
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  root: {

    alignSelf: 'center',
    // alignItems:'center',
    backgroundColor: '#121928',
    padding: 20,
    height: 800,
    width: 360,

  },

  heading1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 45,
    paddingTop: 30,
    paddingBottom: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  content: {
    alignItems: 'center'
  }
})

export default SetupProfilePage