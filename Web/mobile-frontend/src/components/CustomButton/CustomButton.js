import { Text, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, width, borderRadius }) => {

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles['container_${type}'],
                bgColor ? { backgroundColor: bgColor } : {},
                width ? { width: width } : {},
                borderRadius ? { borderRadius: borderRadius } : {}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles['text_${type}'],
                    fgColor ? { color: fgColor } : {},
                ]}>
                {text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {

        width: 300,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        // backgroundColor:'#4C5564',
    },

    container_PRIMARY: {
        backgroundColor: '#4C5564',
    },
    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_TERTIARY: {
        color: 'gray',
    },

    container_hover: {
        backgroundColor: '#3e8e41',
        color: 'white',
    }
});

export default CustomButton