import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from '../screens'
import TabNavigator from './tab-navigator'

const NavigationPage = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='landing' component={LandingPage} />
        <Stack.Screen name='tabNavigator' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationPage