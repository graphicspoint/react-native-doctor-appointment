import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'

const Login = () => {
  return (
    <View style={{backgroundColor: Colors.white, padding:20, alignItems: 'center', marginTop: 300}}>
      <Text style={styles.heading}>Your Doctor</Text>
      <Text style={styles.heading}>Appointment Booking app</Text>
      <Text>Book Appointment and monitor your health</Text>
      <SignInWithOAuth/>
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  heading:{
    fontSize: 25, 
    fontWeight: 'bold',
    
  }
})