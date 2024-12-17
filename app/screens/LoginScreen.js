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

            <Formik
            initialValues={{email:'', password:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={validationSchema}

            
            >
                {({handleChange,handleSubmit,errors, setFieldTouched,touched})=>
                <>
                 <AppTextInput
                 icon='email'
                 placeholder='email'
                 onBlur={()=>setFieldTouched('email')}
            
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='email-address'
                onChangeText={handleChange('email')}
            

            
            
                  />
                  <ErrorMessage visible={touched.email} error={errors.email}/>

            <AppText style={styles.text}>{errors}</AppText>

            <AppTextInput
            icon='lock'
            placeholder='password'
            
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType=''
            onChangeText={handleChange('password')}
            
            
            />

            <AppButton
            title='login'
            onPress={handleSubmit}
            

            
            />
                
                
                </>
                
                }


            </Formik>


           



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