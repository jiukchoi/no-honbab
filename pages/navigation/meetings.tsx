import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreatePage from '../screens/meetings/create'
import ListPage from '../screens/meetings'

const MeetingsNavigator = () => {
  const Stact = createStackNavigator()

  return (
    <Stact.Navigator screenOptions={{headerShown: false}}>
      <Stact.Screen name='list' component={ListPage}></Stact.Screen>
      <Stact.Screen name='create' component={CreatePage}></Stact.Screen>
    </Stact.Navigator>
  )
}

export default MeetingsNavigator