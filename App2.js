import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.814519,
          longitude:  115.166510
        },
        title: 'Garuda Wisnu Kencana',
        subtitle: 'Ungasan, Kuta Sel., Kabupaten Badung, Bali 80361'
      },
      {
        key:2,
        latlng: {
          latitude:-8.845446, 
          longitude: 115.186057
        },
        title: 'Pantai Pandawa',
        subtitle: 'Jl. Pantai Pandawa, Nusa Dua, Kutuh, Kuta Selatan, Kutuh, Kuta Sel., Badung Regency, Bali 80361'
      },
      {
        key:3,
        latlng: {
          latitude:-8.848235, 
          longitude: 115.160128
        },
        title: 'Pantai Melasti'
        subtitle: 'No.8, Gg. VIII, Ungasan, South Kuta, Badung Regency, Bali 80234'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.799373, 
          longitude: 115.117771
        },
        title: 'Pantai DreamLand'
        subtitle: 'Jalan Pantai Balangan No.54, Pecatu, Kuta Selatan, Jimbaran, Pecatu, Kuta Sel., Kabupaten Badung, Bali 80361'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Museum di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://www.rey1024.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
