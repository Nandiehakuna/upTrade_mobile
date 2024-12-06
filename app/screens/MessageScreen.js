import React, {useState} from 'react';

import { StyleSheet,FlatList,ItemSeparatorComponent } from 'react-native'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListSeperator from '../components/ListSeperator';



const InitialMessage =[
    {
        id:1,
        title:'react Native Begginer ',
        description:'this is the first message',
        image:require("../assets/mosh.jpg")
    },

    {
        id:2,
        title:'react Native Begginer ',
        description:'this is the first message',
        image:require("../assets/mosh.jpg")
    },

    {
        id:3,
        title:'react Native Begginer ',
        description:'this is the first message',
        image:require("../assets/mosh.jpg"),
        
    },

] 
function MessageScreen(props) {

    const [messages, setMessages]=useState(InitialMessage)

    const [refreshing, setRefreshing]=useState(false)

    const handleDelete=(message)=>{
        const NewMessages=messages.filter(m => m.id !== message.id)
        setMessages(NewMessages)

    }


    return (
        <Screen >

            <FlatList
            data={InitialMessage}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=>
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log("list item tapped ")}
            renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
       
            
            />}

            ItemSeparatorComponent={ListSeperator}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {
                        id:3,
                        title:'react Native Begginer ',
                        description:'this is the first message',
                        image:require("../assets/mosh.jpg"),
                        
                    },

                ])
            }}

            
            />
        </Screen>
      
    );
}

const styles = StyleSheet.create({
    
    
});

export default MessageScreen;