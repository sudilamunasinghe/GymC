import React, { Component, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CustomButton from '../../../components/CustomButton/CustomButton'
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { color } from 'react-native-elements/dist/helpers';

export default function Trainer_Schedule_Page({ navigation }) {
    const [shouldShow, setShouldShow] = useState(true);
    return (

        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121928',  }}>
        //     <Text
        //         onPress={() => navigation.navigate('Home')}
        //         style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Schedule</Text>
        // </View>

        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>My Calendar
                </Text>
                <View
                    style={{
                        borderBottomColor: '#fff',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 6,
                        marginTop: 6,
                    }}
                />
                <Calendar
                    style={styles.calandar}

                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        // dotColor: '#00adf5',
                        // selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: 'black',
                        indicatorColor: 'blue',
                        // textDayFontFamily: 'monospace',
                        // textMonthFontFamily: 'monospace',
                        // textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                    }}

                    // initialDate={'2022-05-09'}

                    // minDate={'2022-05-10'}

                    // maxDate={'2022-05-30'}

                    onDayPress={day => {
                        console.log('selected day', day);
                        navigation.navigate('Forgot');
                        setShouldShow(!shouldShow);
                    }}

                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}

                    monthFormat={'yyyy MM'}

                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}

                    hideArrows={false}

                    // renderArrow={direction => <Arrow />}

                    // hideExtraDays={true}

                    // disableMonthChange={true}

                    firstDay={1}

                    // hideDayNames={true}

                    // showWeekNumbers={true}

                    onPressArrowLeft={subtractMonth => subtractMonth()}

                    onPressArrowRight={addMonth => addMonth()}

                    ableAllTouchEventsForDisabledDays={true}

                    renderHeader={date => {
                        /*Return JSX*/
                    }}

                    enableSwipeMonths={true}

                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    pastScrollRange={50}
                    futureScrollRange={50}
                    scrollEnabled={true}

                    markedDates={{
                        '2022-09-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2022-09-17': { marked: true },
                        '2022-09-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2022-09-19': { disabled: true, disableTouchEvent: true }
                    }}
                />
                {shouldShow ? (
                    // <Image
                    //     source={{
                    //         uri:
                    //             'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    //     }}
                    //     style={{ width: 250, height: 250 }}
                    // />
                    <View style={styles.newView}>
                        <View style={styles.buttonContainer}>
                            <CustomButton style={styles.addBtn} text="Start Assistant" type="PRIMARY" borderRadius={15} width={250} bgColor="#3DA2FF" />
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={{ color: '#fff' }}>2022 - 09 - 16</Text>
                        </View>
                        <DataTable
                            data={[
                                { Exercise: 'Sreching & Warmup', Repititions: 21 },
                                { Exercise: 'Bench press', Repititions: 22 },
                                { Exercise: 'Incline Press', Repititions: 21 },
                                { Exercise: 'Barbell push press ', Repititions: 22 },
                                { Exercise: 'Goblet squat', Repititions: 20 },
                                { Exercise: 'Dumbbell single arm row ', Repititions: 13 }
                            ]} // list of objects
                            colNames={['Exercise', 'Repititions']} //List of Strings
                            colSettings={[
                                { name: 'Exercise', type: COL_TYPES.STRING, width: '70%' },
                                { name: 'Repititions', type: COL_TYPES.INT, width: '30%' },
                            ]}//List of Objects
                            noOfPages={2} //number
                            backgroundColor={'#2E3441'} //Table Background Color
                            headerLabelStyle={{ color: '#fff', fontSize: 15 }} //Text Style Works
                        />
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#121928'
    },
    scrollView: {
        marginHorizontal: 20,
    },
    calandar: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 380,
        width: 370,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    newView: {
        marginBottom: 20,
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 15,
        color: '#fff',
        marginBottom: 20
    }
    // tableStyles: {
    //     marginTop: 10,
    //     marginBottom: 10,
    //     backgroundColor: '#4A332E',
    //     borderTopLeftRadius: 10
    // }
})