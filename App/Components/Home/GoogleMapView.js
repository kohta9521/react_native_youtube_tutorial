import { View, Text, Dimensions } from 'react-native'
import React from 'react'

// map import
import MapView from 'react-native-maps'

const GoogleMapView = () => {
  return (
    <View>
      <MapView
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
    </View>
  )
}

export default GoogleMapView