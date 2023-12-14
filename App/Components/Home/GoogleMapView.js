import { View, Text, Dimensions } from 'react-native'
import React from 'react'

// map import
import MapView from 'react-native-maps'

const GoogleMapView = () => {
  return (
    <View>
      <MapView
        style={{
          width:Dimensions.get('screen').width*0.89,
          height:Dimensions.get('screen').height*0.23,
          borderRadius:20
        }}
      >

      </MapView>
    </View>
  )
}

export default GoogleMapView