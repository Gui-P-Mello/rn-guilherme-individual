import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { EvilIcons } from '@expo/vector-icons'; 
import {StatusBar} from 'expo-status-bar'
import ProfileCard from '../../components/ProfileCard';

const Profiles = () => {
  const[isEditing, setIsEditing] = useState(false)

  const edit = ()=>{
    isEditing?setIsEditing(false) : setIsEditing(true)
  }

  return (
    <View style={{flex:1, backgroundColor:'#000'}}>
        {/* <StatusBar style='light'/> */}
        
        <View style={{flexDirection:'row', marginTop:30, alignItems:'baseline', width:'100'}}>

          <View style={{width:'33.3%', height:27}}>

          </View>

          <View style={{flexDirection: 'row', justifyContent:'center', width:'33%'}}>
                <Image
                width={100}
                height={27}
                resizeMode='contain'
                source={require('../../../assets/netflix-logo.png')} />
          </View>        

          <View style={{flexDirection: 'row', justifyContent:'flex-end', width:'33%'}}>
            <TouchableOpacity>
              <EvilIcons name="pencil" size={40} color="white" onPress={edit}/>
            </TouchableOpacity>
          </View>

      </View>

      <View style={{alignItems:'center', marginTop:'30%'}}>
        <Text style={{color:'white', fontSize:19, marginBottom:25}}>{!isEditing && "Quem está assistindo?"}</Text>

        <View style={{flexDirection:'row', width:'55%', justifyContent:'space-between', alignItems:'center'}}>
            <ProfileCard 
            pic={require('../../../assets/robo.png')} 
            profileName={'Pedro Henrique'} 
            isEditing={isEditing}/>
            <ProfileCard 
            pic={require('../../../assets/penguin.png')} 
            profileName={'Bernardo'}
            isEditing={isEditing}/>
        </View>
        <View style={{flexDirection:'row', width:'55%', justifyContent:'space-between', alignItems:'center'}}>
            <ProfileCard 
            pic={require('../../../assets/tartaruga.png')} 
            profileName={'Patrícia'} 
            isEditing={isEditing}/>
            <ProfileCard 
            pic={require('../../../assets/orangotango.png')} 
            profileName={'Guilherme'} 
            isEditing={isEditing}/>
        </View>
        <View style={{flexDirection:'row', width:'55%', justifyContent:'space-between', alignItems:'center'}}>
            <ProfileCard 
            pic={require('../../../assets/sapo.png')} 
            profileName={'Jorge'} 
            isEditing={isEditing}/>
        </View>

      </View> 
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
  imagem:{
    width:'50%',
    height:300,
    resizeMode:'contain'
  }
})