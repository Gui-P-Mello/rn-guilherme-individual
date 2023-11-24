import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Profiles from '../screens/Profiles'
import Edit from '../screens/Edit/idex'

const {Navigator, Screen} = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen name='Profiles' component={Profiles} options={{headerShown:false}}/>
            <Screen name='Edit' component={Edit} options={{headerShown:false}}/>
        </Navigator>
    </NavigationContainer>
  )
}

export default Routes