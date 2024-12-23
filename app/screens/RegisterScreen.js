
import React from 'react';
import { Text } from 'react-native';
import { AppForm ,AppFormField,SubmitButton} from '../components/forms';
import * as Yup from 'yup'
import Screen from '../components/Screen';
import DefaultStyles from '../config/styles'
import { StyleSheet } from 'react-native';

function RegisterScreen(props) {

        const validationSchema=Yup.object().shape({
                fname:Yup.string().required().label('fname'),
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
                initialValues={{email:'', password:'', fname:''}}
                onSubmit={values=>console.log(values)}
                validationSchema={validationSchema}
    
                
                >  
                     <AppFormField
                     icon='person'
                     placeholder='name'
                     name={fname}
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType='email-address'
                    
                     />
                   
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
                    <SubmitButton title='register'/>
                    
                    
                    
                    
                    
    
    
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
        


export default RegisterScreen;
