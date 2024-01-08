import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import Search from '../Components/Home/Search';
import Slider from '../Components/Home/Slider';

export default function Home() {
  const { isLoaded,signOut } = useAuth();

  return (
    <View style={{padding:10, marginTop:10}}>
      <Header/>
      <Search setSearchText={(value) => console.log(value)}/>
      <Slider/>
      {/*<Button onPress={() => signOut()} title='SignOut'/>
  <Text>Home</Text>*/}
    </View>
  )
}

