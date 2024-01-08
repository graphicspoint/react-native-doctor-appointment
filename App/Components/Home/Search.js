import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

const Search = ({setSearchText}) => {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{marginTop:15}}>
      <View style={{display:'flex', flexDirection: 'row', alignItems:'center', gap:5, borderWidth: 0.9, padding:5, borderRadius:20, borderColor: Colors.gray}}>
      <Ionicons name="search" size={24} color={Colors.primary} />
      <TextInput placeholder='search' onChangeText={(value) => setSearchInput(value)} style={{width: '100%', fontFamily: 'appfont'}}
      onSubmitEditing={() => setSearchText(searchInput)}/>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})