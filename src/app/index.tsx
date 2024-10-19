import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {router}from 'expo-router'
/*No expo Router tem que ter exporD default para aplicação 
reconhecer a tela principal de rotas.
*/
export default function Index(){
    function singup(){
        router.navigate('/sign-up')
    }
    return(
        <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={singup}>
                <Text
                style={styles.label}>
                    Criar Conta
                </Text>
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
    label:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },
    button:{backgroundColor:"#000",paddingHorizontal:32,paddingVertical:10,borderRadius:10}
})