import React from 'react';
import { Image , StyleSheet, View} from 'react-native';
import Colors from '../config/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            
                <View style={styles.CloseIcon} >
                    <MaterialCommunityIcons name='close' color='white' size={30}/>

                </View>
                <View style={styles.DeleteIcon}>

                    <MaterialCommunityIcons name='delete-outline' size={30} color='white'/>

                </View>


        
     

            <Image style={styles.image} resizeMode='contain' source={require('../assets/chair.jpg')}/>

        </View>

    );
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#000',
        flex:1,
        

    },
    image :{
        height:'100%',
        width:'100%'
    },
    DeleteIcon:{
        width:50,
        height:50,
        // backgroundColor:Colors.secondary,
        position:'absolute',
        top:30,
        marginRight:20


    },
    CloseIcon:{
        width:50,
        height:50,
        
        position:'absolute',
        top:30,
        right:10,
       

    }


    
});
export default ViewImageScreen;