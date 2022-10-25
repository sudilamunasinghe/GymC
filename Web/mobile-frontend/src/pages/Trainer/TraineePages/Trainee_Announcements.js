import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';

// import Header from './Components/header'



 export default function App(){
  // const [people,setPeople] = useState([
  //   { name: 'shaun', key: '1'},
  //   { name: 'shaun', key: '2'},
  //   { name: 'shaun', key: '3'},
  //   { name: 'shaun', key: '4'},
  //   { name: 'shaun', key: '5'},
  // ]);
  return (
    
    <View style={styles.container}> 
      {/* <Header/> */}
      <ScrollView>
       <View style={styles.content}>
        <Text style={styles.titletext}>New</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
        </View>
        <View style={styles.container}>
            
              
                <View style={styles.item}>
                  <Text style={styles.title}>Gym closure</Text>
                  <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
                  <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.title}>Gym closure</Text>
                  <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
                  <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
                </View>
               
              
          
        </View>

      <View style={styles.content}>
        <Text style={styles.titletext}>Earlier</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
              </View>
             
      </View>

      <View style={styles.container}>
            
              
            <View style={styles.item}>
              <Text style={styles.title}>Gym closure</Text>
              <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
              <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Gym closure</Text>
              <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
              <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Gym closure</Text>
              <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
              <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Gym closure</Text>
              <Text style={styles.date}>by Owner Monday, 18 July 2022, 3:47 PM</Text>
              <Text style={styles.msg}>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</Text>
            </View>
           
          
      
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
    marginBottom: 10,

  },
  title :{
    fontSize: 20,
    color: '#fff',
    marginTop: 2,

  },
  date :{
    fontSize: 14,
    color:'#989090',
    textAlign: 'left',
  },

  msg: {
    paddingTop: 10,
    fontSize: 18,
    color:'#fff',
    textAlign: 'left',
  },
  item: {
   marginTop: 10,
   padding: 20,
   fontSize: 24,
   backgroundColor: '#5D6D7E',
   borderRadius: 10,
   marginLeft: 12,
   width: 330,
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
