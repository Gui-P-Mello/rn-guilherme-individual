import { Image, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const ProfileCard = ({pic, profileName, isEditing}) => {
  const[picSize, setPicSize] = useState(100)

  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>isEditing ? navigation.navigate("Edit"):console.log("pressionou")} onPressIn={()=>setPicSize(85)} onPressOut={()=>setPicSize(100)} activeOpacity={1}>
        <View style={{width:100, height:100, justifyContent:'center', alignItems:'center'}}>
          {/* <View style={{width:100, height:100, borderRadius:5, backgroundColor: 'white'}}></View> */}
          <Image source={pic} style={{width:picSize, height:picSize, borderRadius:5, backgroundColor: 'white', marginBottom:8}}/>
          {isEditing && <EvilIcons name="pencil" size={60} color="white" style={{position: 'absolute', margin:'auto'}}/>}
        </View>        
        <Text style={{color:'white', textAlign:'center', marginBottom:25, fontSize:11}}>{profileName}</Text>
    </TouchableOpacity>
  )
}

export default ProfileCard