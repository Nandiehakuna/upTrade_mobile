import React from 'react'

import { StyleSheet,View,Image } from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

export default function ListingsDetailsScreen() {
  return (
    <View style={{width:'100%'}}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")}/>

        <View style={styles.detailsContainer}>

        <AppText styles={styles.title}>Red jacket on sale</AppText>
        <AppText>$100</AppText>

         </View>

         <View style={styles.userContainer}>

         <ListItem title='React Native Developer' subTitle='5 Listings ' image={require('../assets/mosh.jpg')}/>
         </View>


    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%',
    },

    title:{
        fontSize:20,
        fontWeight:"500",
    },

    detailsContainer:{
        padding:20,
        

    },

    userContainer:{
        marginVertical:20,

    }


    
});


