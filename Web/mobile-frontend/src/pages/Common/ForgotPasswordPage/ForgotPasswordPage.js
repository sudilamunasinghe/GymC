import { Text, View ,StyleSheet} from 'react-native'
import React from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPasswordPage = ({ navigation }) =>{
  
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text><Icon name="backward" size={30} color="#fff" 
        onPress={() =>
          navigation.navigate('Login')} 
        /></Text>
        <Text style={styles.title}>
            Forgot Password
        </Text>
        <Text style={styles.text}>User Id</Text>
        <CustomInput 
            // placeholder="Username" 
            // value={username} 
            // setValue={setUsername}
        />
        <CustomButton text="Send OTP" type="PRIMARY" bgColor="#3DA2FF"/>
        <Text style={styles.otpNo}>Check your number +947xxxxx123</Text>
        <Text style={styles.text}>Enter OTP code</Text>
        <CustomInput 
            // placeholder="Username" 
            // value={username} 
            // setValue={setUsername}
        />
        <CustomButton text="Continue" type="PRIMARY" bgColor="#4C5564"
        onPress={() =>
          navigation.navigate('Reset', { name: 'Jane' })} 
        />
      </View>
      </ScrollView>
    )
  }


const styles = StyleSheet.create({
    root:{
        
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
        
    },
    text:{
        color:'white',
        textAlign: 'left',
        // marginTop:30,
        padding:20,
        fontWeight:500,
        fontSize:18,
       
    },
    otpNo:{
        color:'#B1C1D0',
        textAlign:'center',
        padding:20,
    }
})

export default ForgotPasswordPage