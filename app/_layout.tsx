import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' />
      
        <Stack.Screen name='users/[id]' />

      
    </Stack>
  )
}

export default RootLayout