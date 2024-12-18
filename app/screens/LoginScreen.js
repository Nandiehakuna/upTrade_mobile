import React , {useState}from 'react';
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup'
import AppText from '../components/AppText';
import DefaultStyles from '../config/styles'
import ErrorMessage from '../components/ErrorMessage';
import AppForm from '../components/Form/AppFormField';
import SubmitButton from '../components/Form/SubmitButton';
import AppFormField from '../components/Form/AppFormField';


function LoginScreen({navigation}) {

    const validationSchema=Yup.object().shape({
        email:Yup.string().required().email().label('Email'),
        password:Yup.string().required().min(4).label('Password')

    })

  
    return (
        <Screen style={styles.container} >
            <Image
            source={require('../assets/logo2.png')}
            style={styles.logo}
            
            />

            <AppForm
            initialValues={{email:'', password:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}

            
            >
               
                 <AppFormField
                 icon='email'
                 placeholder='email'
                 name={email}
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType='email-address'
                
                 />


                <AppFormField
                icon='lock'
                placeholder='password'
                name={password}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType=''
                
                />
                <SubmitButton/>
                
                
                
                
                


            </AppForm>


           



        </Screen>
       
    );
}

const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:20,
        marginBottom:20

    },

    container:{
          marginTop:50 
    },
    text:{
        color:DefaultStyles.Colors.danger
    }

});

export default LoginScreen;