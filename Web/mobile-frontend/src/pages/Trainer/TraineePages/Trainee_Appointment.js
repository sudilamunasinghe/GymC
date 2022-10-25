import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../../components/CustomButton/CustomButton'
import { Card, Title, Paragraph } from 'react-native-paper';

// LocaleConfig.locales['fr'] = {
//     monthNames: [
//         'Janvier',
//         'Février',
//         'Mars',
//         'Avril',
//         'Mai',
//         'Juin',
//         'Juillet',
//         'Août',
//         'Septembre',
//         'Octobre',
//         'Novembre',
//         'Décembre'
//     ],
//     monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//     dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
//     dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//     today: "Aujourd'hui"
// };
// LocaleConfig.defaultLocale = 'fr';

export default function Trainer_Appointment({ navigation }) {
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: '9.00 AM', value: '9.00' },
        { label: '9.30 AM', value: '9.30' }
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: '9.00 AM', value: '9.00' },
        { label: '9.30 AM', value: '9.30' }
    ]);

    return (
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
                        marginBottom: 20,
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

                    // Initially visible month. Default = now
                    // initialDate={'2022-05-09'}

                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    // minDate={'2022-05-10'}

                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={'2022-05-30'}

                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}

                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}

                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}

                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}

                    // Hide month navigation arrows. Default = false
                    hideArrows={false}

                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={direction => <Arrow />}

                    // Do not shxow days of other months in month page. Default = false
                    // hideExtraDays={true}

                    // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    // disableMonthChange={true}

                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                    firstDay={1}

                    // Hide day names. Default = false
                    // hideDayNames={true}

                    // Show week numbers to the left. Default = false
                    // showWeekNumbers={true}

                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={subtractMonth => subtractMonth()}

                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}

                    // Disable left arrow. Default = false
                    // disableArrowLeft={true}

                    // Disable right arrow. Default = false
                    // disableArrowRight={true}

                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    // disableAllTouchEventsForDisabledDays={true}

                    // Replace default month and year title with custom one. the function receive a date as parameter
                    renderHeader={date => {
                        /*Return JSX*/
                    }}

                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}

                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    // showScrollIndicator={true}

                    markedDates={{
                        '2022-09-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2022-09-17': { marked: true },
                        '2022-09-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2022-09-19': { disabled: true, disableTouchEvent: true }
                    }}
                />
                <View>
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>Upcomming Appointments
                    </Text>
                    <View
                        style={{
                            borderBottomColor: '#fff',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginBottom: 20,
                            marginTop: 6,
                        }}
                    />
                    <Card style={{ marginBottom: 20, backgroundColor: '#2E3441' }}>
                        <Card.Content>
                            <Title style={{ color: '#fff' }}>With Trainer: S.M.Munasinghe</Title>
                            <Paragraph style={{ color: '#fff' }}>Date: 2022-09-06</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={{ marginBottom: 20, backgroundColor: '#2E3441' }}>
                        <Card.Content>
                            <Title style={{ color: '#fff' }}>With Trainer: S.M.Munasinghe</Title>
                            <Paragraph style={{ color: '#fff' }}>Date: 2022-09-08</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={{ marginBottom: 20, backgroundColor: '#2E3441' }}>
                        <Card.Content>
                            <Title style={{ color: '#fff' }}>With Trainer: S.M.Munasinghe</Title>
                            <Paragraph style={{ color: '#fff' }}>Date: 2022-09-10</Paragraph>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ height: 300 }}>
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>New Appointment
                    </Text>
                    <View
                        style={{
                            borderBottomColor: '#fff',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginBottom: 20,
                            marginTop: 6,
                        }}
                    />
                    <View style={styles.dropDownList}>
                        <View style={styles.dropDownListOneItem}>
                            <Text style={styles.dropDownTopic}>Start Time</Text>
                            <DropDownPicker
                                open={open1}
                                value={value1}
                                items={items1}
                                setOpen={setOpen1}
                                setValue={setValue1}
                                setItems={setItems1}
                                style={styles.dropDown}
                            />
                        </View>
                        <View>
                            <Text style={styles.dropDownTopic}>End Time</Text>
                            <DropDownPicker
                                open={open2}
                                value={value2}
                                items={items2}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItems2}
                                style={styles.dropDown}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton style={styles.addBtn} text="Add" type="PRIMARY" borderRadius={15} width={150} bgColor="#3DA2FF" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
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
        marginBottom: 20
    },
    text: {
        fontSize: 42,
    },
    dropDownList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropDownListOneItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    dropDownTopic: {
        color: '#fff',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    dropDown: {
        width: 170,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },

});