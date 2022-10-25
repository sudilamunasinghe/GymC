import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';

// import Header from './Components/header'



 export default function App(){
  
  return (
    
    <View style={styles.container}> 
      {/* <Header/> */}
      <ScrollView>
       <View style={styles.content}>
        <Text style={styles.titletext}>Step 01</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
          </View>
        <Image style={styles.img}source={require('../../../../assets/exercise1.png')}/>

      </View>
      <View style={styles.content}>
        <Text style={styles.titletext}>Instructions</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
          </View>
        

      </View>
      <View style={styles.content}>
        <Text style={styles.subtext}>Get into Position</Text>
        <Text style={styles.text}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>

      </View>

      <View style={styles.content}>
        <Text style={styles.subtext}>Grip the bar</Text>
        <Text style={styles.text}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>

      </View>

      <View style={styles.content}>
        <Text style={styles.subtext}>Get into Position</Text>
        <Text style={styles.text}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>

      </View>

      
      
      </ScrollView>

    </View>
    




  );

 }
  


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121928',
    // paddingTop: 40,
    // paddingHorizontal: 20,  
  },
  content : {
    padding: 20,
    paddingLeft: 30,

  },
  titletext :{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',

  },
  subtext :{
    fontSize: 20,
    color: '#fff',

  },
  text :{
    fontSize: 18,
    color:'#fff',
    textAlign: 'left',
  },
  img :{
    width:350,
    height:300,
    marginRight: 100,
    marginTop: 10,
  },
});





















// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import Header from './Components/header'
// import TodoItem from './Components/TodoItem';


//  export default function App(){
//   const [todos, setTodos] = useState([
//     {text: 'buy coffee', key: '1'},
//     {text: 'create an app', key: '2'},
//     {text: 'play on the switch', key: '3'},
//   ])
//   const pressHandler = (key) => {
//     setTodos((prevTodos) => {
//         return prevTodos.filter(todo => todo.key != key);
//     });
//   }
//   return (
//     <View style={styles.container}>
//       <Header/>
//       <View style={styles.content}>
//         <View style={styles.list}>
//           <FlatList
//             data={todos}
//             renderItem={({ item }) => (
//               <TodoItem item={item} pressHandler = {pressHandler}/>
//             )

//           }
          
//           />

//         </View>

//       </View>
      
//     </View>
   
//   );

//  }
  


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // paddingTop: 40,
//     // paddingHorizontal: 20,  
//   },
//   content : {
//     padding: 40,

//   },
//   item: {
//     marginTop: 10,
//     padding: 30,
//     fontSize: 24,
//     backgroundColor: '#D9D9D9',
//     borderRadius: 10,
//   },
//   notification: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 10,
//     color: '#fff',
//   },
//   new: {
//     fontSize: 20,
//     color: '#fff',
//     marginTop: 20,

//   },
  



 
 
  
// });
