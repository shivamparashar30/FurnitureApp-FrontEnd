import {SafeAreaView,TouchableOpacity,ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/index';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style ={styles.appBarWrapper}>
        <View style = {styles.appBar}>
          <Ionicons name='location-outline' size={24}/>

          <Text style = {styles.location}> Bangalore India</Text>

          <View style = {{alignItems: "flex-end"}}>

            <View style = {styles.cartCount}>

              <Text style={styles.cartNumber}>8</Text>

            </View>
            <TouchableOpacity>
            <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Heading/>
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  textStyle: {
      fontFamily: "bold",
      fontSize: 40
  },
  appBarWrapper:{
    marginHorizontal:22,
    marginTop: SIZES.small
  },
  appBar:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"

  },
  location:{
    fontFamily:"bold",
    fontSize:SIZES.medium,
    color: COLORS.gray
  },
  cartCount:{
    position:'absolute',
    bottom:16,
    width:16,
    height:16,
    borderRadius:8,
    alignItems:"center",
    backgroundColor:"green",
    justifyContent:"center",
    zIndex:999
  },
  cartNumber:{
    fontFamily: "regular",
    fontWeight:"500",
    fontSize:10,
    color:COLORS.lightWhite
  },
  
})