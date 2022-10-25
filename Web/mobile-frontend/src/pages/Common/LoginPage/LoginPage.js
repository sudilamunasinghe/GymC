import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
// import Logo from '../../../../assets/logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in success');
  }
  const onForgotPasswordPressed = () => {
    console.warn('forgot');
  }

  return (

    <View style={styles.root}>
      <Text><Icon name="backward" size={30} color="#fff"
        onPress={() =>
          navigation.navigate('Startup')}
      /></Text>
      {/* <Image source={Logo} style={[styles.logo, {height:height*0.3}]} 
      resizeMode="contain"/> */}
      <Text style={styles.title}>
        Login
      </Text>

      <Text style={styles.text}>User Id</Text>
      <CustomInput
        // placeholder="Username" 
        value={username}
        setValue={setUsername}
      />
      <Text style={styles.text}>Password</Text>
      <CustomInput
        // placeholder="Password" 
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <View style={styles.button}>
        <CustomButton text="Login" onPress={onSignInPressed} type="PRIMARY" bgColor="#4C5564" />
      </View>

      <CustomButton text="Forgot password?"
        onPress={() =>
          navigation.navigate('Reset')}
        type="TERTIARY"
      />



      {/* <CustomButton text="I accept the Terms and conditions" onPress={onForgotPasswordPressed} type="TERTIARY" fgColor="red"/>  */}


    </View>

  )
}

const styles = StyleSheet.create({
  root: {

    alignSelf: 'center',
    // justifyContent:'center',
    padding: 20,
    backgroundColor: '#121928',
    height: 800,
    textAlign: 'left',
    width: 360,
  },
  logo: {
    width: '70%',
    height: '100vh',
    marginBottom: 40,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'left',
    fontSize: 18,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 30,
    alignSelf: 'center'
  },
  button: {
    marginTop: 20,
  }
})

export default LoginPage