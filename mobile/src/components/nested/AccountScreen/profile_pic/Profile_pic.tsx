import React from "react";
import { Image, ImageStyle, StyleProp, Text, View, ViewStyle } from "react-native";

type Props = {
    backgroundColor? : string,
    width : number | string,
    height : number | string,
    imageStyle? : StyleProp<ImageStyle>,
    containerStyle? : StyleProp<ViewStyle>,
}
const profilePic:React.FC<Props> = ({backgroundColor, width, height, imageStyle, containerStyle}) => {
    return (
        <View style={[{backgroundColor : backgroundColor}, containerStyle]}>
            <Image source={require("./mokilo.png")} style={[{width, height, borderRadius :  100}, imageStyle]}/>
        </View>
    )
}

export default profilePic;