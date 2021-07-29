import React from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';


const getFonts = () => {
  return Font.loadAsync({
    
  })
}

export default function App() {
  return (
    <Home />
  );
}


