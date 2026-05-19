import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {

  return (

    <ScrollView style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>
        ประวัติผู้จัดทำ
      </Text>

      {/* Card 1 */}
      <View style={styles.card}>

        <Image
          source={require('../assets/pp.jpg')}
          style={styles.image}
        />

        <Text style={styles.name}>
          นางสาวรมิดา แจ่มจำรัส
        </Text>



      </View>

      {/* Card 2 */}
      <View style={styles.card}>

        <Image
          source={require('../assets/dd.jpg')}
          style={styles.image}
        />

        <Text style={styles.name}>
          นางสาวรัตนาภรณ์ ธรรมนู
        </Text>



      </View>

    </ScrollView>

  );

}


// =======================
// STYLE
// =======================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF8FF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0077B6',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#023E8A',
    textAlign: 'center',
  },

  detail: {
    fontSize: 15,
    color: '#5C677D',
    marginTop: 8,
    textAlign: 'center',
  },

});