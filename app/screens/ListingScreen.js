import React from 'react';
import { FlatList,StyleSheet } from 'react-native'
import Screen from '../components/Screen';
import Card from '../components/Card';

const Listings =[
    {

        id:1,
        title:'brand new jacket in good condition',
        subTitle:'100',
        image:require('../assets/jacket.jpg')

    },

    {
        id:2,
        title:'couch in good condition',
        subTitle:'100',
        image:require('../assets/jacket.jpg')

    },


]

function ListingScreen(props) {
    return (
        <Screen>
            <FlatList
            data={Listings}
            keyExtractor={ListingsItem=>ListingsItem.id.toString()}
            renderItem={({item})=>
                <Card
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                
                />
            }
            
            />



        </Screen>
    );
}

const styles = StyleSheet.create({



    
});



export default ListingScreen;
