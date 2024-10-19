import {View,StyleSheet} from 'react-native'
import {Link} from 'expo-router'

export default function Signip(){
    return(
        <View style={styles.container}>
            <Link href={"/"} style={styles.back}>Voltar</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cecece'
    },
    back:{
        fontSize:22,
        fontWeight:'bold'
    }
})