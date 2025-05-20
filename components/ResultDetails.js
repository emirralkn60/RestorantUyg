import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultDetails({result}) {
  return (
    <View style={styles.container}>
        <Image np
        style={styles.Image}
        source={result.image_url ? {uri:result.image_url}:null}
        />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10
    },
    Image:{
        width:250,
        height:100,
        borderRadius:10,
        marginBottom:5,
    },
    name:{
        fontWeight:'bold',
    },

});