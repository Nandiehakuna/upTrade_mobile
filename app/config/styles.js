import Colors from "./Colors";
import { Platform } from "react-native";

export default {
    Colors,
    text:{
        fontSize:15,
        color:Colors.darkGray,
        fontFamily: Platform.OS=='android'? 'Roboto':'Courier',
        fontWeight:'600'
    }
}