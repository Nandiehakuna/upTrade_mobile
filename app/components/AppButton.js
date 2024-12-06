import React from 'react';
import { View,Text,StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';
import DefaultStyles from '../config/styles'

function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:Colors[color]}]} onPress={onPress} color="primary">
            
        
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

        
            
        
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:DefaultStyles.Colors.danger,
        borderRadius:25,
        width:'97%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        zIndex: 1,
    },
text :{
    color:Colors.white,
    textAlign:'center',
    fontSize:15,
    textTransform:'uppercase'

}
    
});

export default AppButton;