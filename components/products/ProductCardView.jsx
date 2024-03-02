import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate("ProductDetails")}>
        <View style= {styles.container}>
            <View style= {styles.imageContainer}>
                <Image
                source={{uri:"https://nydesignagenda.com/wp-content/uploads/2018/12/Luxury-Guide-The-Most-Expensive-Furniture-Brands-1.jpg"}}
                style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}> Product</Text>
                <Text style={styles.supplier} numberOfLines={1}> Product</Text>
                <Text style={styles.price}> $2300</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>

    </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({
    container:{
        width:152,
        height:200,
        marginEnd:22,
        borderRadius:15,
        backgroundColor:COLORS.secondary,

    },
    imageContainer:{
        flex:1,
        width:140,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",

    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    
    details:{
        padding:SIZES.small,
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        marginBottom:2
    },
    supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        color:COLORS.gray
    },
    price:{
        fontFamily:"medium",
        fontSize:SIZES.medium
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right:SIZES.xSmall
    },
})