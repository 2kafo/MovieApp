
import React from 'react'
import { Link, router } from 'expo-router'
import { View,Text, Pressable, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
const Homepage = () => {
  return (
    <View style={tw`flex-1 justify center items-center bg-black`}>
       
        <Text></Text>
        <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg`}>
        <Text style={tw`text-white`}>
            Home
            <Link href='/users/1'>go to userpage</Link>
            <Pressable onPress={()=> {router.push('/users/3')}}>
               <Text> Move to users page</Text>
            </Pressable>
        </Text>
        </TouchableOpacity>
       
        
    </View>

  )
}

export default Homepage