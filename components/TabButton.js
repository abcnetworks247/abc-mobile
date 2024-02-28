import React from 'react'
import { Pressable, Text } from 'react-native'
import { UseUserContext } from '../context/UserContext'

const TabButton = () => {
    const {UserData, setIsSignUpVisible}= UseUserContext()
  return (
      <Pressable onPress={()=>setIsSignUpVisible(true)}>
          <Text>Profile</Text> 
     </Pressable>
  )
}

export default TabButton