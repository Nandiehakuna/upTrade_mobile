import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native'
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import Colors from '../config/Colors';
import ListSeperator from '../components/ListSeperator';

const MenuItems =[
    {
        title:'My Listings',
        
        icon:{
            name:'list',
            backgroundColor:Colors.primary
        },
        targetScreen:'myListings'

    },

    {
        title:'My Messages',
        
        icon:{
            name:'message',
            backgroundColor:Colors.secondary
        },
        targetScreen:'messages'

    }
]
function AccountScreen({navigation}) {
    return (
     <Screen style={styles.Container}>

        <ListItem
        title='React Native Begginer'
        subTitle='begginner level'
        image={require('../assets/mosh.jpg')}
        
        
        />

        <View style={styles.ListContainer}>

        <FlatList
        data={MenuItems}
        keyExtractor={item=>item.title}
        ItemSeparatorComponent={ListSeperator}
        renderItem={({item})=><ListItem
        title={item.title}
        
        ImageComponent={<Icon
        name={item.icon.name}
        backgroundColor={item.icon.backgroundColor}
        onPress={()=>navigation.navigate(item.targetScreen)}
        />}
        
        
        />}
        
        />

        </View>


        <ListItem style={styles.logout}
        title='Log out'
        ImageComponent={<Icon  name='login' backgroundColor='#fcbf49'/>}
        />



     </Screen>
    );
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#adb5bd'

    },

    ListContainer:{
        marginVertical:20

    },
    logout:{
        marginVertical:10
    }
    
});

export default AccountScreen;