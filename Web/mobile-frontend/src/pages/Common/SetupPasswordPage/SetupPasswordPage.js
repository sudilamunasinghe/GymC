import {Text, View ,StyleSheet} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const SetupPasswordPage = ({ navigation }) => {

  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');

    return (
      <View style={styles.root}>
        <Text><Icon name="backward" size={30} color="#fff" 
        onPress={() =>
          navigation.navigate('Setup', { name: 'Jane' })} 
        /></Text>
        <View style={styles.content}>
        <Text style={styles.title}>
            Set Your Own Password
        </Text>
        <Text style={styles.text}>New Password</Text>
        <CustomInput 
            // placeholder="Username" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <CustomInput 
            // placeholder="Username" 
            value={confirmPassword} 
            setValue={setConfirmPassword}
            secureTextEntry={true}
        />
        <View style={styles.reset}>
        <CustomButton  text="Reset" type="PRIMARY" bgColor="red"
        onPress={() =>
          navigation.navigate('Guide', { name: 'Jane' })}
        />
        </View>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    root:{
        
        // alignItems:'center',
        // justifyContent:'center',
        alignSelf:'center',
        padding:20,
        backgroundColor:'#121928',
        height:800,
        textAlign: 'left',
        width:360,
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
        padding:30,
        textAlign:'center',
    },
    text:{
        color:'white',
        textAlign: 'left',
        // marginTop:30,
        padding:20,
        fontWeight:500,
        fontSize:18,
       
    },
    reset:{
       marginTop:100,
    },
    // content:{
    //   alignSelf:'center'
    // }
})

export default SetupPasswordPage