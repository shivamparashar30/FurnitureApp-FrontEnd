import { FlatList, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'


const ProductRow = () => {

    const products= [1, 2, 3, 4]

  return (
    <View style={{marginTop:SIZES.medium, marginLeft:12}}>
    <FlatList
        data={products}
        renderItem={({item}) => <ProductCardView/>}
        horizontal
        contentContainerStyle= {{columnGap: SIZES.medium+1}}
    />
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})