import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons"

const InputForm = ({ value, placeholder, onChangeText, inputStyle, OnPress, iconSource, ...props }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={{ ...styles.loginInput, ...inputStyle }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
            {iconSource && (
                <TouchableOpacity style={styles.touchableIcon} onPress={OnPress} >
                    <Icon name={iconSource} size={24} color="gray"  />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    loginInput: {
        backgroundColor: '#F8F0F0',
        marginTop: moderateScale(20),
        height: moderateScale(50),
        width: '80%',
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        color: 'black',
    },
    inputView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    inputIcon: {
        height: moderateScale(24),
        width: moderateScale(24),
        color: '#8F8989'
    },
    touchableIcon: {
        position: 'absolute',
        right: '14%',
        top: '50%',
    },
});
