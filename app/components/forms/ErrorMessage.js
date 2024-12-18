import React from 'react';
import AppText from './AppText';
import { StyleSheet } from 'react-native'

function ErrorMessage({error, visible}) {
        if (!error || !visible) return null;
        return (
               <AppText style={styles.style}>{error}</AppText>
        );
}

const styles = StyleSheet.create({
        style:{
                color:'red',
        }
        
});

export default ErrorMessage;