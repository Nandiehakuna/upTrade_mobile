import React from 'react';
import { View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../config/Colors';
import { TouchableWithoutFeedback } from 'react-native';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

       <View style={styles.Container} >
        <MaterialCommunityIcons name='delete-outline'color={Colors.white} size={30}/>
       </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:Colors.danger,
        width:70,
        justifyContent:'center',
        alignItems:'center'

    }
    
});

export default ListItemDeleteAction;

