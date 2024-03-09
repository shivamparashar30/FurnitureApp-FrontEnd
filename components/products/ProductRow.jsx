import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hook/useFetch'


const ProductRow = () => {

  const {data, isLoading, error} = useFetch()

    const products= [1, 2, 3, 4]

  return (
    <View style={{marginTop:SIZES.medium, marginLeft:12}}>
    {isLoading ? (
      <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
    ):error ? (
      <Text>Something went wrong</Text>
    ):(
      <FlatList
        data={data}
        key={(item) => item.id}
        renderItem={({item}) => <ProductCardView item={item}/>}
        horizontal
        contentContainerStyle= {{columnGap: SIZES.medium+1}}
    />
    )}
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})