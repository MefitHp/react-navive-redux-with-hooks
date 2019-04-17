import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const AlbumList = () => {
  useEffect(() => {
    console.log('useEffect in da house')
  }, [])
  return (
    <View>
      <Text>Album List</Text>
    </View>
  )
}

export default AlbumList
