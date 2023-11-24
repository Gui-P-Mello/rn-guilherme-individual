import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Edit = () => {
  return (
    <View style={{flex:1, backgroundColor:'#000', alignContent:'center', justifyContent:'center'}}>
      <TextInput style={{backgroundColor:'gray'}} />
      <TouchableOpacity style={{backgroundColor:'white'}} onPress={()=> console.log('teste')}>
        <Text style={{textAlign:'center'}} >
            Salvar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Edit