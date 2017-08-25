import React from 'react'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewItem: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 16,
    margin: 16,
    flexDirection: 'row',
    backgroundColor: 'rgb(230, 126, 34)'
  }
})

const withLayout = style => (LeftComponent, RightComponent) => (
  <View style={style} >
    <LeftComponent style={styles.viewItem} />
    <RightComponent style={styles.viewItem} />
  </View>
)

const withData = data => Component => (
  <Component>
    { data }
  </Component>
)

export {
  withLayout,
  withData
}
