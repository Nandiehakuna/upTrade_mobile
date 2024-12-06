import React from 'react';
import { StyleSheet, Image,View, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Colors from '../config/Colors';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import ListItemDeleteAction from './ListItemDeleteAction';

function ListItem({image, title, subTitle, onPress, ImageComponent}) {
    return (
        <Swipeable  >


            <TouchableHighlight
            onPress={onPress}
            underlayColor={Colors.grey}
            
            >
    
    
            <View style={styles.row}>
                {image && <Image style={styles.image} source={image}/>}
                {ImageComponent}
    
                <View style={styles.TextContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
    
    
    
            </View>
            </TouchableHighlight>
            
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center'
    }, 

    image:{
        height:70,
        width:70,
        borderRadius:35,
        marginHorizontal:10,
    },
    title:{
        color:'#252422',
        fontWeight:'600'

    },

    subTitle:{
        color:'#a5a5a5'

    },

    TextContainer:{
        justifyContent:'center',
        marginLeft:10

    }


   




    
});

export default ListItem;