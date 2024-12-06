import React from 'react';
import { Platform, Text,StyleSheet } from 'react-native';
import DefaultStyle from '../config/styles'

function AppText({children,style}) {
    return (
        <Text style={[DefaultStyle.text, style]}>{children}</Text>
       
    );
}



const styles = StyleSheet.create({

});

export default AppText;