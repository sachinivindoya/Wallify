import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/HomePage';
import { AppLoading } from 'expo';
import { Container, Drawer, StyleProvider } from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import SideBar from './src/SideBar';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



;












