import { View, TouchableOpacity, StyleSheet } from "react-native";
import {Icon} from 'react-native-elements'
import Colors from "../constants/Colors";

const SettingsBtn = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Icon type="MaterialIcons" name="settings" size={32} color="white" tvParallaxProperties={undefined}/>
            </TouchableOpacity>
        </View>    
    )
}


const styles = StyleSheet.create({
    btn : { 
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : Colors["light"].foreground,
        borderRadius : 10,
        margin: 5,
        padding: 10,
    },
});

export default SettingsBtn