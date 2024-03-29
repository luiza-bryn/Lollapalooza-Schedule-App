import * as React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, BackHandler, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
        source={require('./assets/background_home.jpeg')}
        style={styles.background}
        blurRadius={5}
        resizeMode="contain"
      >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/lollapalooza.png')}
          
        />
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 175, 154)' }]} onPress={() => navigation.navigate('ScheduleList')}>
        <Text style={styles.buttonText}>Atrações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(245, 54, 34)' }]} onPress={() => navigation.navigate('ScheduleDetails') }>
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 175, 154)' }]} onPress={() => navigation.navigate('FavoritesList') }>
        <Text style={styles.buttonText}>Favoritos</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 300,
    width: 300,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});