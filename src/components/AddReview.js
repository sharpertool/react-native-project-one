import React, {useState} from 'react'

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view'

const AddReview = (props) => {
  
  const [reviewerName, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  
  const close = () => {
    props.navigation.goBack()
  }
  
  const submitReview = () => {
    setSubmitting(true)
    fetch('http://localhost:3000/review', {
      method: 'POST',
      body: JSON.stringify({
        name: reviewerName,
        rating: rating,
        comment: review
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(result => {
        props.navigation.goBack()
        setSubmitting(false)
        setName('')
        setRating(0)
        setReview('')
      })
      .catch(error => {
        setSubmitting(false)
      })
  }
  
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={close}
        >
          <Icon name={'close'} size={30} color={'#0066CC'}/>
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Name (Optional)"
          value={reviewerName}
          onChangeText={name => setName(name)}
        />
        
        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {
            [1, 2, 3, 4, 5].map(i => {
              return <TouchableOpacity
                onPress={() => setRating(i)}
                style={styles.starButton}
                key={i}
              >
                <Icon
                  name={'star'}
                  color={rating >= i ? '#FFD64C' : '#CCCCCC'}
                  size={40}
                />
              </TouchableOpacity>
            })
          }
        </View>
        
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Review"
          value={review}
          onChangeText={review => setReview(review)}
          multiline={true}
          numberOfLines={5}
        />
        
        { isSubmitting &&
          <ActivityIndicator
            size="large" color="#0066CC"
            style={{ padding: 10 }}
          />
        }
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitReview}
          disabled={isSubmitting}
        >
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  starButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center'
  }
})
export default AddReview

