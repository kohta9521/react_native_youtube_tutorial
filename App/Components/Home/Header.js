import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

const Header = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evently', gap: 10, alignItems: 'center' }}>
        <Image source={require('./../../../assets/logo.png')}
            style={styles.logo}
        />
        <View>
            <TextInput placeholder='Search'
                style={styles.searchBar}
            />
        </View>
        <Image source={require('./../../../assets/placeholder.jpg')}
            style={styles.userImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 10,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get('screen').width*0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100
  }
})


export default Header