import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, PixelRatio, BackHandler} from "react-native";
import { formatAMPM } from "../utils/formatAMPM";

type Props = {
    props  : any;
    color : string;
    title : string;
    icon : string;
    from : Date;
    till : Date;
    Onpress : () => void;
}

const Task:React.FC<Props> = ({props, color, title, icon, from, till})=>{
    return(
        <View {...props} style={[{backgroundColor : color}, style.container]}>
                <Text style={style.Text}>{title}</Text>
                <View style={style.center}>
                    <Ionicons name={icon as any} size={85} color={'white'}/>                
                </View>          
                <View>
                    <Text style={style.time}>{`${formatAMPM(from)}-${formatAMPM(till)}`}</Text>
                </View>    
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        margin : 5,
        width : "35%" ,
        height : 200    ,
        borderRadius : 10,
        flexDirection : "column",
        justifyContent : "space-between",
        padding : 5
    },
    center : {
        justifyContent : "center",
        alignItems : "center"
    },
    time : {
        fontSize : PixelRatio.getPixelSizeForLayoutSize(3.5),
        fontFamily : "Amiko-Bold",
        color : "white"
    },
    Text : {
        fontSize : PixelRatio.getPixelSizeForLayoutSize(5),
        fontFamily : "Amiko-Bold",
        color : "white"

    },
})

export default Task;