import React from 'react'

import {Text, View} from 'react-native'

import HeaderStyle from 'styles/HeaderStyle'

const Header = ({title}) => {
  return (
    <Text style={HeaderStyle.iOSHeader}>
      {title}
    </Text>
  )
}

export default Header
