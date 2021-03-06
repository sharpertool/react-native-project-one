import React, {useState} from 'react'

import {StyleSheet, Text, View, Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image
} from 'react-native'

import {createStackNavigator} from 'react-navigation'

import Stars from './Stars'

const RestaurantRow = (props) => {
  
  const {place, index, navigation} = props
  const {id, name, address, image, rating} = place
  
  const [showInfo, setInfoState] = useState(false)
  
  const infoPressed = () => {
    // setInfoState(s => { return !s })
    navigation.navigate('Info', {
      place: props.place
    })
  }
  
  return (
    <View>
      <View key={id}
            style={[
              styles.row,
              { backgroundColor: index % 2 === 0 ? 'white' : 'lightgray'}
            ]}>
        <View  style={styles.stars}>
          <Stars rating={rating}/>
        </View>
        <View style={styles.nameAddress}>
          <Text>
            {name}
          </Text>
          <Text style={{color: 'gray'}}>
            {address}
          </Text>
        </View>
        <View style={styles.edges}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#5398dc"}
            onPress={infoPressed}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
      {showInfo &&
        <View style={styles.info}>
          <Text >{name} Info</Text>
          <Image
          style={{
            flex: 1,
            height: 100,
          }}
            source={{
            uri: `http://localhost:3000/images/${image}`,
          }}
          resizeMode={"contain"}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  }
})

export default RestaurantRow

