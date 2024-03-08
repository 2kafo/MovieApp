import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const UserPage = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
        
        <Text>User page - {id}</Text>
    </View>
  )
}

export default UserPage