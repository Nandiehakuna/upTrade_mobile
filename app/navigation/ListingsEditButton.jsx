import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';

function ListingsEditButton({onPress}) {
        return (
               <TouchableOpacity onPress={onPress}>
               <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' size={20} color={Colors.black}/>
               </View>


               </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
        container:{
                height:50,
                width:50,
                borderRadius:25,
                borderColor:Colors.secondary,
                borderWidth:10,
                alignItems:'center',
                justifyContent:'center',
                marginLeft:30,

                
        }
        
});

export default ListingsEditButton;