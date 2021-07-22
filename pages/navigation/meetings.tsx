import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreatePage from '../screens/meetings/create'
import ListPage from '../screens/meetings'
import { Image } from 'react-native'

const MeetingsNavigator = () => {
  const Stact = createStackNavigator()

  return (
    <Stact.Navigator screenOptions={{headerShown: false}}>
      <Stact.Screen name='게시물 목록' component={ListPage} />
      <Stact.Screen
        options={{
          headerShown: true,
          headerBackTitleStyle: {
            fontSize: 12,
            color: '#E24E4A',
            marginLeft: 10,
          },
          headerBackImage: () => (
            <Image style={{marginLeft: 20}} source={require('../../public/meetings/arrow-left.png')} />
          ),
          headerTitle: null,
        }}
        name='create'
        component={CreatePage}
      />
    </Stact.Navigator>
  )
}

export default MeetingsNavigator