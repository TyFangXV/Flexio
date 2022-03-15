import { StyleSheet, View } from "react-native";
import AddTask from "../../AddTask";
import SettingsBtn from "../../settingsBtn";


const TopButtons = () => {
    return (
        <View style={style.container}>
            <SettingsBtn/>
            <AddTask/>
        </View>
    )
}


const style = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : "space-between",
    }
})


export default TopButtons;