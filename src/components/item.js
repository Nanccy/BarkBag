import React from 'react'
import { View, Text } from 'react-native'

const Item = props => (
  <View style={props.style}>
    <Text>
      {/* {props.children} */}
      item 2
    </Text>
  </View>
)

export default Item
