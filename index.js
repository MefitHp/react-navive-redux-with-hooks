/**
 * @format
 */
import React from 'react'
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header/Header';
import AlbumList from './src/components/albums/AlbumList';


let App = () => (
  <View>
    <Header>
      Perro
    </Header>
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('booksApp', () => App)