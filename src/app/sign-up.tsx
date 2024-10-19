import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {router} from 'expo-router'

export default function Signip(){
    function back(){
        router.back()
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={back}
            >
            <Text style={styles.back}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    back:{
        fontSize:22,
        fontWeight:'bold'
    }
})