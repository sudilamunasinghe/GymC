import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import guide from '../../../../assets/Guide.png'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const StartPage = ({ navigation }) => {
  // const[username,setUsername]=useState('');
  // const[password,setPassword]=useState('');

  // const {height} = useWindowDimensions();

  // const onSignInPressed=()=>{
  //     console.warn('Sign in success');
  // }
  // const onForgotPasswordPressed=()=>{
  //     console.warn('forgot');
  // }

  return (

    <View style={styles.root}>
      {/* <View style={styles.content}></View> */}
      <Icon name="backward" size={30} color="#fff"
        onPress={() =>
          navigation.navigate('SetupPw', { name: 'Jane' })}
      />

      <Text style={styles.heading1}>Place an Appoinment</Text>
      <Text style={styles.heading2}>Reserve time with a trainer for your first visit Go to "Appoinments"to add one</Text>

      <View style={styles.GuideContainer}>
        <Image source={guide} style={styles.guide}
          resizeMode="contain" />
      </View>

      <View style={styles.loginButton}>
        <CustomButton text="Next" type="PRIMARY" bgColor="#4C5564" fgColor="white"
          onPress={() =>
            navigation.navigate('Explore', { name: 'Jane' })}
        />
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignSelf: 'center',
    // alignItems:'center',
    marginTop: 0,
    backgroundColor: '#121928',
    height: 800,
    textAlign: 'left',
    width: 360,
  },
  guide: {
    width: '60%',
    height: 300,
    // marginBottom:10,
    alignSelf: 'center',
    // marginTop:0,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    // padding:20,
  },
  heading1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 0,
    padding: 10,
    fontWeight: 'bold',

  },
  heading2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
    fontWeight: 500,

  },
  GuideContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  }
})

export default StartPage