import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const { isLoaded, isSignIn, user } = useUser();
  if (!isLoaded || isSignIn) {
    return null
  }
  return (
    <View style={{display: 'flex', alignItems:'center', flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{display: 'flex', flexDirection: 'row', gap:10, alignItems:'center'}}>
        <Image source={{ uri: user.imageUrl }} style={{ width: 50, height: 50, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }} />
        <View>
          <Text style={{fontFamily: 'appfont'}}>Hello, 👋</Text>
          <Text style={{fontSize:18, fontFamily: 'appfont-bold'}}>{user.fullName}</Text>
        </View>
        </View>
        <Ionicons name="notifications-outline" size={28} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})