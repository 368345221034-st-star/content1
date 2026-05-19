import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import SONGS from '../data/songs';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.header}>🎵 Playlist</Text>
        <Text style={styles.subHeader}>
          Tap to play your favorite song
        </Text>
      </View>

      {/* List */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {SONGS.map((song) => (

          <TouchableOpacity
            key={song.id}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Player', {
                id: song.id,
              });
            }}
          >

            {/* Emoji */}
            <View style={styles.iconBox}>
              <Text style={styles.icon}>
                {song.icon}
              </Text>
            </View>

            {/* Content */}
            <View style={styles.center}>
              <Text style={styles.title}>
                {song.artist}
              </Text>

              <Text style={styles.artist}>
                {song.title}
              </Text>
            </View>

            {/* Right */}
            <View style={styles.right}>
              <Text style={styles.time}>
                {song.time}
              </Text>

              <Text style={styles.play}>▶</Text>
            </View>

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  // =========================
  // Container
  // =========================
  container: {
    flex: 1,
    backgroundColor: '#F6F9FF',
    padding: 20,
  },

  // =========================
  // Header
  // =========================
  headerBox: {
    marginTop: 20,
    marginBottom: 20,
  },

  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1E2A44',
  },

  subHeader: {
    fontSize: 14,
    color: '#8A94A6',
    marginTop: 6,
  },

  // =========================
  // Card
  // =========================
  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  // Emoji box
  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#EAF3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  icon: {
    fontSize: 28,
  },

  center: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E2A44',
  },

  artist: {
    fontSize: 13,
    color: '#8A94A6',
    marginTop: 4,
  },

  right: {
    alignItems: 'center',
  },

  time: {
    fontSize: 12,
    color: '#A0A9B8',
    marginBottom: 6,
  },

  play: {
    fontSize: 16,
    color: '#4DA3FF',
  },

});