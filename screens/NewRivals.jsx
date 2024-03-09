import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS,SIZES } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ProductList } from '../components'

const NewRivals = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.Wrapper}>
            <View style={styles.UpperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite} />
            </TouchableOpacity>
            <Text style={styles.heading}>Products</Text>
            </View>
            <ProductList/>
        </View>
    </SafeAreaView>
  )
}

export default NewRivals

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    Wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    UpperRow:{
        width:SIZES.width-50,
        marginHorizontal:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5
    },
})