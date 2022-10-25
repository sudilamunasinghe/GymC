import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';

// import Header from './Components/header'



 export default function App(){
  
  return (
    
    <View style={styles.container}> 
      {/* <Header/> */}
      <ScrollView>
       <View style={styles.content}>
        <Text style={styles.titletext}>Payment Plan</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
              <View style={styles.pdetails}>
                  <Text style={styles.subtext}>Time period : Monthly</Text>
                  <Text style={styles.subtext}>Personal/ Non-Personal : Personal</Text>
              </View>
        

      </View>

      <View style={styles.content}>
        <Text style={styles.titletext}>Last Payment</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
              <View style={styles.pdetails}>
                  <Text style={styles.subtext}>Date :  2 nd May 20222</Text>
                  <Text style={styles.subtext}>Amount : Rs. 1000.00</Text>
              </View>
        

      </View>

      <View style={styles.content}>
        <Text style={styles.titletext}>Next Payment</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
              <View style={styles.pdetails}>
                  <Text style={styles.subtext}>Date :  2 nd July 20222</Text>
                  
              </View>
        

      </View>

      <View style={styles.content}>
        <Text style={styles.titletext}>Pay Now</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
              
              
              
        

      </View>
      
      <View>
        <TextInput style={styles.input}
          placeholder='Amount'
          keyboardType='numeric'

        />
        
              
      </View>
      <View style={styles.btn}>
        <Button  title='Pay'/>
      </View>
      
     

      
      
      </ScrollView>

    </View>
    




  );

 }
  


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121928',
    paddingTop: 20,
    paddingHorizontal: 15,  
  },
  content : {
    padding: 25,
    paddingLeft: 30,

  },
  titletext :{
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#fff',

  },
  subtext :{
    fontSize: 16,
    color: '#fff',
    marginTop: 2,

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
  },
  pdetails: {
    marginTop: 20,
  },
  input :{
    padding: 8,
    margin: 20,
    width: 328,
    backgroundColor: '#D9D9D9',
    marginLeft: 28,

  },
  btn :{
    padding: 28,
    marginHorizontal: 100, 
     
  }
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
