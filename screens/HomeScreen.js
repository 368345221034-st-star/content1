import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      {/* Background Circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />

      {/* ดาวตกแต่ง */}
      <Text style={styles.star1}>⭐</Text>
      <Text style={styles.star2}>✨</Text>
      <Text style={styles.star3}>🌈</Text>

      {/* Card หลัก */}
      <View style={styles.mainCard}>

        {/* รูปวงกลม */}
        <View style={styles.imageOuter}>

          <View style={styles.imageMiddle}>

            <Image
              source={require('../assets/image6.jfif')}
              style={styles.image}
            />

          </View>

        </View>

        {/* Title */}
        <Text style={styles.title}>
          เพลงเด็ก 🎵
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          สนุก สดใส ฟังเพลินทุกวัน
        </Text>

        {/* Description */}
        <View style={styles.textCard}>

          <Text style={styles.textCardTitle}>
            🧸 แอปเพลงสำหรับเด็ก
          </Text>

          <Text style={styles.textCardText}>
            รวมเพลงเด็กน่ารัก ๆ
            พร้อมภาพสีสันสดใส
            และเนื้อเพลงร้องตามได้
          </Text>

        </View>

        {/* Button */}
        <TouchableOpacity

          activeOpacity={0.9}

          style={styles.button}

          onPress={() =>
            navigation.navigate('Next')
          }
        >

          <Text style={styles.buttonText}>
            เริ่มฟังเพลง 🎶
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  // ========================
  // Container
  // ========================

  container: {
    flex: 1,
    backgroundColor: '#6EC6FF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  // ========================
  // Background Circle
  // ========================

  circle1: {

    position: 'absolute',

    width: 320,

    height: 320,

    borderRadius: 160,

    backgroundColor: '#9BE7FF',

    top: -80,

    left: -100,
  },

  circle2: {

    position: 'absolute',

    width: 260,

    height: 260,

    borderRadius: 130,

    backgroundColor: '#B3E5FC',

    bottom: -60,

    right: -80,
  },

  circle3: {

    position: 'absolute',

    width: 180,

    height: 180,

    borderRadius: 90,

    backgroundColor: '#D1F4FF',

    top: 180,

    right: -40,
  },

  // ========================
  // Stars
  // ========================

  star1: {
    position: 'absolute',
    top: 120,
    left: 50,
    fontSize: 28,
  },

  star2: {
    position: 'absolute',
    top: 180,
    right: 60,
    fontSize: 24,
  },

  star3: {
    position: 'absolute',
    bottom: 180,
    left: 40,
    fontSize: 30,
  },

  // ========================
  // Main Card
  // ========================

  mainCard: {

    width: width * 0.88,

    backgroundColor: '#FFFFFF',

    borderRadius: 40,

    paddingVertical: 40,

    paddingHorizontal: 25,

    alignItems: 'center',

    shadowColor: '#000',

    shadowOpacity: 0.15,

    shadowRadius: 15,

    elevation: 10,
  },

  // ========================
  // Image
  // ========================

  imageOuter: {

    width: 220,

    height: 220,

    borderRadius: 110,

    backgroundColor: '#B3E5FC',

    justifyContent: 'center',

    alignItems: 'center',
  },

  imageMiddle: {

    width: 190,

    height: 190,

    borderRadius: 95,

    backgroundColor: '#E1F5FE',

    justifyContent: 'center',

    alignItems: 'center',
  },

  image: {

    width: 170,

    height: 170,

    borderRadius: 85,
  },

  // ========================
  // Title
  // ========================

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#0077B6',
    marginTop: 28,
  },

  subtitle: {
    fontSize: 18,
    color: '#5C677D',
    marginTop: 10,
    marginBottom: 30,
  },

  // ========================
  // Text Card
  // ========================

  textCard: {

    width: '100%',

    backgroundColor: '#F1FAFF',

    borderRadius: 25,

    padding: 20,

    marginBottom: 35,
  },

  textCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0096C7',
    marginBottom: 12,
    textAlign: 'center',
  },

  textCardText: {
    fontSize: 17,
    color: '#5C677D',
    lineHeight: 28,
    textAlign: 'center',
  },

  // ========================
  // Button
  // ========================

  button: {

    width: '100%',

    height: 65,

    backgroundColor: '#00B4D8',

    borderRadius: 35,

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: '#000',

    shadowOpacity: 0.2,

    shadowRadius: 10,

    elevation: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

});