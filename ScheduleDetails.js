import * as React from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { Platform } from "react-native";
import { TouchableOpacity, Image } from "react-native";

export default function ScheduleListScreen({ route, navigation }) {
  const { contact } = route.params;

  const handleGetDirections = (contact) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=Current Location&destination=${contact.endereco_apresentacao}&travelmode=driving`;
    Linking.openURL(url);
  };

  const handleOpenPlaylist = (contact) => {
    Linking.openURL(contact.link_playlist);
  };

  return (
    <View>
      <View>
        <Text style={styles.name}>{contact.nome}</Text>

        <TouchableOpacity onPress={() => handleGetDirections(contact)}>
          <Text style={styles.endereco}>{contact.endereco_apresentacao}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOpenPlaylist(contact)}>
          <Text style={styles.playlist}>{contact.link_playlist}</Text>
        </TouchableOpacity>

        <Text style={styles.resto}>{contact.link_site}</Text>

        <Text style={styles.resto}>{contact.valor_ingresso}</Text>

        <Text style={styles.resto}>{contact.link_compra_ingresso}</Text>

        <Text style={styles.resto}>{contact.telefone}</Text>
      </View>
      <View>
        <Button
          title="Voltar"
          onPress={() => navigation.navigate("ScheduleList")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  name: {
    fontSize: 25,
    height: 44,
    color: "red",
  },
  resto: {
    fontSize: 18,
    height: 44,
    color: "blue",
  },
  endereco: {
    fontSize: 18,
    height: 44,
    color: "yellow",
  },
  playlist: {
    fontSize: 18,
    height: 44,
    color: "green",
  },
});
