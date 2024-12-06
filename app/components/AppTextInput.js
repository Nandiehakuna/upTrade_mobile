import React, { useState } from 'react';
import {View,StyleSheet, TextInput,Platform } from 'react-native'
import Screen from './Screen';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../config/Colors';
import DefaultValue from '../config/styles'

function AppTextInput({icon, ...otherProps}) {

    return (
      
        <View style={styles.Container}>



        <MaterialCommunityIcons  name={icon} size={20} style={styles.icon} />

        <TextInput
        style={styles.TextInput}
        {...otherProps}

        />
        </View>





      
    );
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        backgroundColor:Colors.lightGray,
        borderRadius:20,
        width:'100%',
        padding:15,

        alignItems:'center',
        marginBottom:20
        



    },

    TextInput:{
        color:DefaultValue.Colors.darkGray
        
    },

    icon:{
        marginRight:10,
        color:DefaultValue.Colors.darkGray,

    }
});

export default AppTextInput;

