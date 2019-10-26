import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const AboutScreen = (props) => {
  return  (
    <View style={styles.container}>
      <Text style={styles.header}>
        About Restaurant Review
      </Text>
      
      <Icon
        name="utensils"
        color="#0066cc"
        size={100}
        style={styles.icon}
      />
      
      <Text style={styles.text}>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </Text>
      <Text style={styles.text}>
        Vestibulum id ligula porta felis euismod semper.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 20
  }
})

export default AboutScreen