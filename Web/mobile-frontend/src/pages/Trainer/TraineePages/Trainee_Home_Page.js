import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../../assets/logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';



// import ScrollableFeed from 'react-scrollable-feed'


//announcement Feed

const DATA = [
    {
        id: '1',
        title: 'Annoucement 1',
        Date: '2nd May 2022',
        Note: 'Gym c will be closed on 20th May 2022'
    },
    {
        id: '2',
        title: 'Annoucement 2',
        Date: '2nd May 2022',
        Note: 'Gym c will be closed on 10th August 2022'
    },
    {
        id: '3',
        title: 'Annoucement 3',
        Date: '2nd May 2022',
        Note: 'Gym c will be closed on 2nd September 2022'
    },
    // {
    //     id: '4',
    //     title: 'Annoucement 4',
    //     Date:'2nd May 2022',
    //     Note:'Gym c will be closed on 20th May 2022'
    // },
    // {
    //     id: '5',
    //     title: 'Annoucement 5',
    //     Date:'2nd May 2022',
    //     Note:'Gym c will be closed on 20th May 2022'
    // },

];
// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

export default function Trainer_Home_Page({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.homecontainer}>
                    <View style={styles.header}>
                        <Text><Icon name="user-circle" size={30} color="#fff"
                            onPress={() =>
                                navigation.navigate('Startup')}

                        />
                            <Text style={styles.profilename}>Sumudu Perera</Text>

                        </Text>

                    </View>
                    <Text style={styles.sectionHeader}>Quick Access</Text>
                    <View style={styles.cardbody}>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                {/* <br></br> */}
                                <Text><Icon name="calendar" size={45} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text style={styles.cardHeader}>Appointment</Text>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon2 name="wallet" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text style={styles.cardHeader}>Payments</Text>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon name="qrcode" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text style={styles.cardHeader}>Attendance</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon3 name="feedback" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('TraineeFeedback')}

                                /></Text>
                                <Text style={styles.cardHeader}>Feedback</Text>
                            </View>
                        </View>

                    </View>
                    <Text style={styles.sectionHeader}>Annoucements</Text>
                    <View style={styles.announcementbody}>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={DATA}
                            renderItem={({ item }) =>
                            (
                                <Text style={styles.item}>{item.title}</Text>,
                                <Text style={styles.item}>{item.Date}</Text>,
                                <Text style={styles.item}>{item.Note}</Text>
                            )}

                        />

                    </View>


                </View>


            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({

    root: {

        alignSelf: 'center',
        // justifyContent:'center',
        padding: 20,
        backgroundColor: '#121928',
        height: 800,
        textAlign: 'left',
        // width: 360,
        color: 'white',
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
    },
    homecontainer: {
        flex: 1,
    },
    header: {
        paddingLeft: 180,
        width: '100%',
        height: '10%',
        alignContent: 'right',
        // backgroundColor: '#eee',
        color: 'white',

    },
    profilename: {
        color: 'white',
        marginLeft: '10px',
        marginBottom: '20px',
    },
    sectionHeader: {
        marginTop: 20,
        fontSize: 18,
        paddingBottom: 10,
        paddingRight: 50,
        color: 'white',
        alignContent: 'left',
        // fontFamily:'Poppins',
        fontWeight: 600,


    },
    cardHeader: {
        color: 'white',
    },

    cardbody: {
        color: 'white',
        width: '100%',
        height: '30%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopColor: 'white',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 4,
        // color: 'white'
    },
    inner: {
        flex: 1,
        backgroundColor: 'rgba(152,144,144,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // color:'white'
    },

    //annoucement part
    announcementbody: {
        borderTopColor: 'white',
        borderTopWidth: StyleSheet.hairlineWidth,
    },

    lowScrollFeed: {
        color: 'white',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'rgba(152,144,144,0.3)',
        color: 'white',
        padding: 40,
        marginVertical: 7,
        marginHorizontal: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 32,
    },
})
