  
import AppButton from '../components/AppButton';
import { StyleSheet,ImageBackground,View,Text } from 'react-native'
import { Image } from 'react-native';

function WecomeScreen(props) {
    return (
     <ImageBackground 
     blurRadius={10}
     style={styles.background}
     source={require("../assets/chair.jpg")}>

        <View style={styles.LogoContainer}>
        <Image style={styles.Logo}  source={require('../assets/logo2.png')}/>
        <Text style={styles.tagline}>save what you do not need </Text>

        </View>
        


        <AppButton title="login" onPress={()=>console.log('tapped')}/>
        <AppButton title='register' color="secondary"/>


     </ImageBackground>
    );
}

const styles = StyleSheet.create({

    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:'center'

    },
    Logo :{
        width:150,
        height:150,
        
        


    },
    LogoContainer :{
        position:'absolute',
        top:150,
        
        

    },
    tagline:{
        fontWeight:'600',

    }
   

    

    
});

export default WecomeScreen;