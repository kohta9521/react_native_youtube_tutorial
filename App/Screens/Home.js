import { View, Text } from 'react-native'
import React from 'react'

// components import
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'

const Home = () => {
  return (
    <View>
      <Header />
      <GoogleMapView />
    </View>
  )
}

export default Home