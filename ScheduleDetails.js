import * as React from "react";
import { Text, View, StyleSheet, Button, Linking, Image } from "react-native";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ScheduleListScreen({ route, navigation }) {
  const { contact } = route.params;

  const handleGetDirections = (contact) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=Current Location&destination=${contact.endereco_apresentacao}&travelmode=driving`;
    Linking.openURL(url);
  };

  const images = {1: require('./assets/sza.jpg'), 2: require('./assets/gilberto_gil.jpg'), 3: require('./assets/hozier.jpeg'), 4: require('./assets/sam_smith.jpg'), 5: require('./assets/lady_gaga.jpeg'), 6: require('./assets/beyonce.jpeg')}

  return (
    
    <View>
      <Text style={styles.name}>{contact.nome}</Text>
      

      <Image source={ images[contact.id] } />

      <Text style={styles.contactDetails}>Valor do ingresso: R${contact.valor_ingresso},00</Text>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => handleGetDirections(contact)} style={styles.addressContainer}>
          <Image source={require('./assets/localizacao.png')} style={styles.icon} />
          <Text style={styles.endereco}>{contact.endereco_apresentacao}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 175, 154)' }]} onPress={() => Linking.openURL(`tel:${contact.telefone}`)}>
      <Text style={styles.buttonText}>Telefone</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(255, 68, 56)' }]} onPress={() => Linking.openURL(contact.redes_sociais)}>
      <Text style={styles.buttonText}>Redes sociais do artista</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 175, 154)' }]} onPress={() => Linking.openURL(contact.link_compra_ingresso)}>
        <Text style={styles.buttonText}>Comprar ingresso</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(255, 68, 56)' }]} onPress={() => Linking.openURL(contact.link_site)}>
      <Text style={styles.buttonText}>Site do artista</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 175, 154)' }]} onPress={() => Linking.openURL(contact.link_playlist)}>
      <Text style={styles.buttonText}>Video do artista</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(255, 68, 56)' }]} onPress={() => navigation.navigate("ScheduleList")}>
      <Text style={styles.buttonText}>voltar</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    marginTop: 20, 
    marginBottom: 20, 
  },
  endereco: {
    fontSize: 18,
  },
  playlist: {
    fontSize: 18,
    height: 44,
  },
  button: {
    padding: 15,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
    
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
    marginLeft: 10,
    marginBottom: 10,
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  text: {
    fontSize: 16,
    marginLeft: 10, // Adiciona espaço entre a imagem e o texto
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  teste: {
    alignItems: 'center',
  }
});