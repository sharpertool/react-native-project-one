import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Platform,
  FlatList,
  Image
} from 'react-native'

import axios from 'axios'

import Header from 'components/Header'
import RestaurantRow from './src/components/RestaurantRow'
import PizzaImage from './src/images/pizza.png'

const App: () => React$Node = () => {
  
  const [search, setSearch] = useState({term: ''})
  const [restaurants, setRestaurantList] = useState([])
  
  useEffect(() => {
    axios('http://localhost:3000/restaurant_list')
      .then(result => {
        console.log('Got some results', result)
        setRestaurantList(result.data)
      })
  }, [])
  
  const title = Platform.select({
    ios: 'Restaurant Review',
    android: 'Restaurant List',
  })
  
  return (
    <>
      <View style={styles.container}>
        <View style={{
          marginTop: 30,
          alignItems: 'center'
        }}>
          <Image source={PizzaImage}/>
        </View>
        <Header title={title}/>
        <TextInput
          placeholder={'Live Search'}
          style={styles.input}
          onChangeText={text => {
            setSearch({term: text.toLowerCase()})
          }}
        />
        <FlatList
          data={
            restaurants.filter(place => {
              return (search.term == '')
                || (place.name.toLowerCase().includes(search.term))
            })
          }
          renderItem={({item, index}) => {
            return (<RestaurantRow place={item} index={index + 1}/>)
          }}
          keyExtractor={item => item.name}
          initialNumToRender={20}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'orange',
  },
  input: {
    //marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
})

export default App
