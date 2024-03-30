import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity, Linking } from 'react-native';
import jsonData from './assets/dados.json';

const ScheduleListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simule um atraso de 2 segundos para carregar os dados
    setTimeout(() => {
      setData(jsonData);
      setLoading(false);
    }, 2000);
  }, []);

  const handleGetDirections = (item) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=Current Location&destination=${item.endereco_apresentacao}&travelmode=driving`;
    Linking.openURL(url);
  };

    const handleOpenPlaylist = (item) => {
    Linking.openURL(item.link_playlist);
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
                <View>
                <Text style={styles.name}>{item.nome}</Text>
                <TouchableOpacity onPress={() => handleGetDirections(item)}>
                  <Text style={styles.endereco}>{item.endereco_apresentacao}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOpenPlaylist(item)}>
                  <Text style={styles.playlist}>{item.link_playlist}</Text>
                </TouchableOpacity>
                <Text style={styles.resto}>{item.link_site}</Text>
                <Text style={styles.resto}>{item.valor_ingresso}</Text>
                <Text style={styles.resto}>{item.link_compra_ingresso}</Text>
                <Text style={styles.resto}>{item.telefone}</Text>
              </View>
            )}
          />
          <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
    </>
  );
};

export default ScheduleListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  name: {
    fontSize: 25,
    height: 44,
    color: 'red'
  },
  resto: {
    fontSize: 18,
    height: 44,
    color: 'blue'
  },
  endereco: {
    fontSize: 18,
    height: 44,
    color: 'yellow'
  },
  playlist: {
    fontSize: 18,
    height: 44,
    color: 'green'
  }
});