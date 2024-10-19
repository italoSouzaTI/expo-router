import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Link}from 'expo-router'
/*No expo Router tem que ter exporD default para aplicação 
reconhecer a tela principal de rotas.
*/
export default function Index(){
    return(
        <View style={styles.container}>
            {/* Passando propriedade do link para TouchableOpacity com asChild */}
            <Link href="/sign-up" asChild>
                <TouchableOpacity style={styles.button}>
                <Text
                style={styles.label}>
                    Criar Conta
                </Text>
                </TouchableOpacity>
            </Link>
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