import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function FavoritesListScreen({ route }) {
  const { favorites } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shows Favoritados</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.showContainer}>
            <Text style={styles.showName}>{item.nome}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Horário: {item.horario}</Text>
            <Text>Local: {item.endereco_apresentacao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  showName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
