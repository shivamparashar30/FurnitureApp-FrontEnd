import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native';
import { COLORS, SIZES  } from '../constants';
import { useRoute } from '@react-navigation/native';
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';

const ProductDetails = ({navigation}) => {

  const route = useRoute();
  const{item} = route.params;
  // console.log(item);

  const[count, setCount]= useState(0)

  const increment =() =>{
    setCount(count + 1)
  }
  const decrement=() =>{
    if  (count > 0 ) {
    setCount(count - 1 )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{uri:item.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${item.price}</Text>
        </View>

      </View>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1, 2, 3, 4, 5].map((index)=>(
            <Ionicons
            key={index}
            name="star"
            size={24}
            color="gold" />
          ))}
          <Text style={styles.ratingText}> (4.9)</Text>
        </View>

        <View style={styles.rating}>
          <TouchableOpacity onPress={()=> increment()}>
            <SimpleLineIcons
            name='plus' size={20}
            />
          </TouchableOpacity>
          <Text style={styles.ratingText}> {count} </Text>
          <TouchableOpacity onPress={()=> decrement()}>
            <SimpleLineIcons
            name='minus' size={20}
            />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.descriptionWraper}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.descText}>{item.description}</Text>
      </View> 
      <View style={{marginBottom:SIZES.small}}>
        <View style={styles.location}>
            <View style={{flexDirection:"row"}}>
              <Ionicons name="location-outline" size={20}/>
              <Text>    {item.product_location}  </Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
              <Text>   Free Delivery   </Text>
            </View>
        </View>

      </View>
      <View style={styles.cartRow}>

        <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto name="shopping-bag" color={COLORS.lightWhite} size={22}/>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.lightWhite

  },
  upperRow:{
    marginHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'center',
    position:'absolute',
    top:SIZES.xxLarge,
    width:SIZES.width-44,
    zIndex:999, 
  },
  image:{
    aspectRatio:1,
    resizeMode:"cover"
  },
  details:{
    marginTop:-SIZES.large,
    backgroundColor:COLORS.lightWhite,
    width:SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius:SIZES.medium,


  },
  titleRow:{
    marginHorizontal:20,
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZES.width-44,
    marginTop:20,

  },
  cartRow:{
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZES.width,
  },
  cartBtn:{
    width:SIZES.width*0.7,
    backgroundColor:COLORS.black,
    padding:SIZES.small,
    borderRadius:SIZES.small,
    marginLeft:12
  },
  addCart:{
    width:37,
    height:37,
    borderRadius:50,
    margin:SIZES.small,
    backgroundColor:COLORS.black,
    alignItems:"center",
    justifyContent:"center"

  },
  ratingRow:{
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZES.width-10,
    marginTop:5,
  },
  rating:{
    top:SIZES.large,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginHorizontal:SIZES.large

  },
  ratingText:{
    color:COLORS.gray,
    fontSize:SIZES.large,
    paddingHorizontal:SIZES.xSmall,
  },
  descriptionWraper:{
    margin:SIZES.large*2,
    marginHorizontal:SIZES.large
  },
  description:{
    fontFamily:"medium",
    fontSize:SIZES.large-2,
  },
  descText:{
    fontFamily:"regular",
    fontSize:SIZES.small,
    textAlign:"justify",
    marginBottom:SIZES.small,
  },
  location:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginHorizontal:12,
    backgroundColor:COLORS.secondary,
    padding:5,
    borderRadius:SIZES.large
  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.large
  },
  cartTitle:{
    marginLeft:SIZES.small,
    fontFamily:"bold",
    fontSize:SIZES.medium,
    color:COLORS.lightWhite,
  },
  priceWrapper:{
    backgroundColor:COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price:{
    paddingHorizontal:6,
    fontFamily:"semibold",
    fontSize:SIZES.large
  },
})