import React from 'react';

import { StyleSheet } from 'react-native'
import { View } from 'react-native-web';

function ListSeperator(props) {
    return (
        <View style={styles.seperator}></View>
       
    );
}

const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        backgroundColor:'#6c757d',
        height:1,
        


}
    
});

export default ListSeperator;