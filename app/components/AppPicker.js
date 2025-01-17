import React, { useState } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import { TextInput } from 'react-native';
import DefaultValue from '../config/styles'
import AppText from './AppText';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon,placeholder,item,selectedItem,pickerItemComponent=PickerItem, onSelectItem, width='100%',...otherProps}) {
    const[modalVisible,setModalVisible]=useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)} >


        <View style={[styles.container,{width}]}>
            <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            />

            {selectedItem ? <AppText style={styles.Text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

            
            <MaterialCommunityIcons
            name='chevron-down'
            
            />

        

        </View>
        
        </TouchableWithoutFeedback>

        <Screen>

        <Modal visible={modalVisible} animationType='slide'>
            <Button 
            title='close'
            onPress={()=>setModalVisible(false)}
            />

            <FlatList
            data={item}
            keyExtractor={(item)=>item.value.toString()}
            renderItem={({item})=><pickerItemComponent
            label={item.label}
            onPress={()=>{
                setModalVisible(false)
                onSelectItem(item)
            }}
            
            />}

            
            />


        </Modal>
        </Screen>

        </>

       
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:DefaultValue.Colors.lightGray,
        borderRadius:10,
        padding:15,

        alignItems:'center'
        
    },

    icon:{
        marginRight:10

    },
    Text:{
        fontSize:DefaultValue.text.fontSize,
        flex:1
    },
    placeholder:{
        color:DefaultValue.Colors.lightGray
    }


    
});

export default AppPicker;