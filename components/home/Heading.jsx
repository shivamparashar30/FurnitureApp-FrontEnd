import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Heading = () => {
  const  navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList") } >
            <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        // marginBottom:-SIZES.xSmall,
        marginHorizontal:12
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",

    },
    headerTitle:{
        fontFamily:"bold",
        fontSize: SIZES.xLarge -2,
    },

})