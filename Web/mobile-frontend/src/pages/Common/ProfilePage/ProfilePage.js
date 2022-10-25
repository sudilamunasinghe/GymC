import * as React from 'react';
import { Stylesheet, Button, Tab, View, Text } from 'react-native';
// import { Avatar } from "@rneui/base";
// import { Formik } from 'formik';

export default function ProfilePage({ navigation }) {

    const [index, setIndex] = React.useState(0);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#121928'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white' }}>Profile
            </Text>
            {/* <Avatar
                activeOpacity={0.2}
                avatarStyle={{}}
                containerStyle={{ backgroundColor: "#BDBDBD" }}
                imageProps={{}}
                overlayContainerStyle={{}}
                placeholderStyle={{}}
                rounded
                size="large"
                source={{ uri: "" }}
                title="U"
                titleStyle={{}}
            /> */}
            {/* <View >
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                      backgroundColor: 'white',
                      height: 3,
                    }}
                    variant="primary"
                >
                <Tab.Item
                    title="General"
                    containerStyle={(active) => ({
                        backgroundColor: active ? "#989090" : undefined,
                      })}
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="Reset Password"
                    containerStyle={(active) => ({
                        backgroundColor: active ? "989090" : undefined,
                      })}
                    titleStyle={{ fontSize: 12, color: "black" }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
                </Tab>
                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}> */}
                        {/* <Formik
                            initialValues={{ email: '' }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                />
                                <Button onPress={handleSubmit} title="Submit" />
                            </View>
                            )}
                        </Formik> */}
                    {/* </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                        <Text h1>PW reset form here</Text>
                    </TabView.Item>
                </TabView>
            </View> */}
        </View>
        

    );
}
const styles= Stylesheet.create({

});