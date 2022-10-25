import * as React from 'react';
import { View, Text, Dimensions,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {
    LineChart,
  } from "react-native-chart-kit";

export default function Trainer_Profile_Page({ navigation }) {

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };

      const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `black`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        
      };

    return (
        <View style={styles.root}>
          <Text style={styles.text}>Chart</Text>
                {/* <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width:320, paddingTop:10
                }}
                /> */}
            {/* <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white' }}>Profile</Text> */}
            <LineChart
            data={data}
            width={330}
            height={260}
            chartConfig={chartConfig}
            padding={10} 
            />
            <View style={styles.button}>
              <Button mode="contained" onPress={() => console.log('Pressed')}>
                Compare
              </Button>
            </View>
            <View style={styles.details}>
                <Text style={styles.text}>Workout No: W002</Text>
                <Text style={styles.text}>Workout Plan</Text>
                <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width:320, paddingBottom:5
                }}
                />
                <Text style={styles.text}>Diet Plan</Text>
                <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width:320,paddingBottom:5
                }}
                />
                <Text style={styles.text}>Calories Burned</Text>
                <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width:320,paddingBottom:5
                }}
                />
            </View>
            
            
        </View>

    );
    
}

const styles = StyleSheet.create({
  root:{
      
    flex: 1, 
    alignItems: 'center',
    alignSelf:'center', 
    justifyContent: 'center',
    backgroundColor:'#121928',
    width: 360 , 
    height:1000,
    paddingTop:40
  },
  button:{
    padding:30,
  },
  details:{
    
  },
  text:{
    color:'white',
    paddingTop:30
  }

})