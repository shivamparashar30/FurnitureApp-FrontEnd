import { SafeAreaView, StyleSheet,View, Text, TouchableOpacity, TextInput, Alert, FlatList, Image } from 'react-native'
import React,{useState} from 'react'
import { COLORS, SIZES } from '../constants/index';
import { Feather, Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Search = () => {
  const[searchKey, setSearchKey] = useState('');
  const[searchResult, setSearchResult] = useState([]);

  const handleSearch = async() => {

    try {
      const response = await axios.get(`https://furniture-app-backend-two.vercel.app/api/products/search/${searchKey}`)
      setSearchResult(response.data)
      // console.log(response.data);
    } catch (error) {
      console.log("failed to fetch product", error);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>  
            <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput} 
            value={searchKey}
            onChangeText={setSearchKey} 
            autoCapitalize="none"
            onPressIn={()=>{}}
            placeholder='What Are You Looking For?'
            
            />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
        <Feather name="search" size={24} color={COLORS.offwhite}/>
        </TouchableOpacity>
    </View>
    </View>
    {searchResult.length === 0 ? (
      <View style={{flex:1}}>
        <Image
        source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
        />
      </View>
    ): (
      <FlatList 
       data={searchResult}
       keyExtractor={item => item._id}
       renderItem={({item})=>(<Text>{item.title}</Text>)}
      />
    )}
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
searchImage:{
  resizeMode:"contain",
  width:SIZES.width-80,
  height:SIZES.height-300,
  opacity:0.9
},
})