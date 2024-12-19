import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-web';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';

function ListingsEditButton({onPress}) {
        return (
               <TouchableOpacity onPress={onPress}>
               <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle-outline' size={40} color={Colors.white}/>
               </View>


               </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
        container:{
                height:80,
                width:80,
                borderRadius:40,
                borderColor:Colors.primary,
                borderWidth:10,
                alignItems:'center',
                justifyContent:'center'

                
        }
        
});

export default ListingsEditButton;