import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';

import StarRating from 'react-native-star-rating-widget';


export default function Trainee_Feedback_Screen() {

    const [rating, setRating] = useState(0);
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Feedback</Text>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.titletext}>Rating</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
                    </View>
                    {/* <StarRater/> */}
                    <View style={styles.starRater}>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                    />
                    
                    </View>
                    


                </View>

                <View style={styles.content}>
                    <Text style={styles.titletext}>Comment</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
                    </View>





                </View>

                <View>
                    <TextInput style={styles.input}
                        placeholder='Add Comment'
                        keyboardType='string'

                    />


                </View>
                <View style={styles.btn}>
                    <Button title='Submit' />
                </View>





            </ScrollView>

        </View>





    );

}



const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#121928',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#121928',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    content: {
        padding: 25,
        paddingLeft: 30,

    },
    titletext: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#fff',

    },
    subtext: {
        fontSize: 16,
        color: '#fff',
        marginTop: 2,

    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
    },
    img: {
        width: 350,
        height: 300,
        marginRight: 100,
    },
    starRater:{
        marginTop:20,
        
    },
    pdetails: {
        marginTop: 20,
        alignSelf:'left',
    },
    input: {
        padding: 8,
        margin: 20,
        // width: 328,
        height: 80,
        backgroundColor: 'rgba(152,144,144,0.3)',
        marginLeft: 28,
        color: 'white',
        borderRadius:5,

    },
    btn: {
        paddingRight: '5%',
        marginHorizontal: 100,
        borderRadius:10,

    }
});