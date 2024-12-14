import { DefaultTheme } from "@react-navigation/native";
import Colors from "../config/Colors";
import { Background } from "@react-navigation/elements";


export default{
        ...DefaultTheme,
        colors:{
                ...DefaultTheme.colors,
                primary:Colors.primary,
                background:Colors.white,
        }
}

