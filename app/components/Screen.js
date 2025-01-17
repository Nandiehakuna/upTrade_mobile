import React from 'react';
import { SafeAreaView ,StyleSheet,View} from 'react-native';
import Constants from 'expo-constants';

function Screen({children, style={}}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>

            <View style={styles.screen}>


            {children}
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        // marginLeft:5,
        
    }
    
});
export default Screen;