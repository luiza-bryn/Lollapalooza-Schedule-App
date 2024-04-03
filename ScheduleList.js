import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import jsonData from './assets/dados.json';

export default function ScheduleListScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simule um atraso de 2 segundos para carregar os dados
    setTimeout(() => {
      setData(jsonData);
      setLoading(false);
    }, 2000);
  }, []);

  // Função para alternar o estado de favorito para um show
  const toggleFavorite = (id) => {
    setData(data.map(item => {
      if (item.id === id) {
        return {...item, favorite: !item.favorite};
      }
      return item;
    }));
  };

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ScheduleDetails', { contact: item })}>
                <View style={styles.showContainer}>
                  <Text style={styles.contact}>{item.nome}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    <Ionicons
                      name={item.favorite ? 'star' : 'star-outline'}
                      size={30}
                      color={item.favorite ? 'gold' : 'gray'}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
          <Button title="Ver Favoritos" onPress={() => navigation.navigate('FavoritesList', { favorites: data.filter(item => item.favorite) })} />
        <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(255, 68, 56)' }]} onPress={() => navigation.navigate("Home")}>
       <Text style={styles.buttonText}>voltar</Text>
       </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contact: {
    fontSize: 18,
    height: 44,
  },
  button: {
    padding: 15,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
