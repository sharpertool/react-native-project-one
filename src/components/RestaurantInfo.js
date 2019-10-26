import React from 'react'

import {View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet} from 'react-native'

import Stars from './Stars'

const RestaurantInfo = (props) => {
  
  const place = props.navigation.getParam('place')
  
  const addReview = () => {
    props.navigation.navigate('AddReview')
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
            uri: `http://localhost:3000/images/${place.image}`
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View  style={styles.info}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
          <Stars rating={place.rating} />
          <TouchableOpacity
            style={styles.button}
            onPress={addReview}
          >
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

RestaurantInfo.navigationOptions = {
  title: 'Info'
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  infoHeader: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: 'grey',
    marginBottom: 5,
  },
})

export default RestaurantInfo