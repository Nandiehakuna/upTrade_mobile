import React from 'react';
import { View, StyleSheet } from 'react-native'
import Colors from '../config/Colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.background}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <AppText styles={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>



             </View>


        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#343a40'
    },
    card:{
        backgroundColor:Colors.white,
        borderRadius:15,
        paddingVertical:10
    },

    image:{
        width:'100%',
        height:100,

    },

    title:{
        marginBottom:10,

    },

    subTitle:{
        
    }

    
});

export default Card;