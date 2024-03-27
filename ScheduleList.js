import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';
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
              <TouchableOpacity onPress={() => navigation.navigate('ScheduleList', { contact: item })}>
                <View>
                  <Text style={styles.contact}>{item.nome}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Button title="Voltar" onPress={() => navigation.navigate('ScheduleList')} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  contact: {
    fontSize: 18,
    height: 44,
  }
});
