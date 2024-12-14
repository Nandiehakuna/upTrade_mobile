import React from 'react'

import { StyleSheet,View,Image } from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

export default function ListingsDetailsScreen({route}) {

    const listing = route.params;
  return (
    <View style={{width:'100%'}}>
        <Image style={styles.image} source={listing.image}/>

        <View style={styles.detailsContainer}>

        <AppText styles={styles.title}>{listing.title}</AppText>
        <AppText>${listing.price}</AppText>

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


