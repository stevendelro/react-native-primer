// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/Components/Header';

// Create a component
const App = () => <Header headerText={'Movie Finder'} />;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
