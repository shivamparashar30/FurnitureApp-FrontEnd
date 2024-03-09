import { StyleSheet,FlatList, Text, View, ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import ProductCardView from './ProductCardView'

const ProductList = () => {

    const{data, isLoading, error} = useFetch();

    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
                data ={data}
                numColumns={2}
                renderItem={({item}) => (<ProductCardView item={item}/>)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}

            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        alignContent:"center"

    },
    container:{
        alignItems:"center",
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2
    },
    separator:{
        height:16
    },
})