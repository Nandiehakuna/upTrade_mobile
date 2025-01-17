import React from 'react';
import { View, StyleSheet ,Image, TouchableOpacity} from 'react-native'
import Colors from '../config/Colors';
import AppText from './AppText';
import DefaultStyle from '../config/styles'
import Screen from './Screen';
import { Pressable } from 'react-native';
import UsercardIcon from './icons/UsercardIcon';

function Card({title, subTitle, image , onPress}) {
    return (
        <Screen>
        <Pressable onPress={onPress} style={styles.background}>


        <View style={styles.background}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <AppText styles={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>${subTitle}</AppText>



             </View>
             <UsercardIcon/>



        </View>
        </Pressable>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:DefaultStyle.Colors.lightGray,
        
        
    },
    card:{
        backgroundColor:Colors.white,
        borderRadius:15,
        // marginBottom:10,
        padding:10
        
    },

    image:{
        width:'100%',
        height:200

    },

    title:{
        marginBottom:10,


    },

    subTitle:{
        
    }

    
});

export default Card;