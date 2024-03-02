import { SafeAreaView, StyleSheet,View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/index';
import { Feather, Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>  
            <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput} 
            value="" 
            onPressIn={()=>{}}
            placeholder='What Are You Looking For?'
            
            />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
        <Feather name="search" size={24} color={COLORS.offwhite}/>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical:SIZES.medium,
    height:38
},

searchIcon:{
    marginHorizontal:10,
    color:COLORS.gray,
    marginTop:6
    // marginLeft:350
},
searchWrapper:{
    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small
},
searchInput:{
    fontFamily:"regular",
    width:"100%",
    height:"100%",
    paddingHorizontal:SIZES.small,
    // color:"black"
},
searchBtn:{
    width:50,
    height:"100%",
    borderRadius:SIZES.medium,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:COLORS.primary,
    
    
},
})