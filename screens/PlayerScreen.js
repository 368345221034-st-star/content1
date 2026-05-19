import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Audio } from 'expo-av';
import SONGS from '../data/songs';

export default function PlayerScreen({ route, navigation }) {
  const { id } = route.params;

  const song = SONGS.find(item => item.id === id);

  const soundRef = useRef(null);
  const loadingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  // ======================
  // SETUP + LOAD SONG
  // ======================
  useEffect(() => {
    let isActive = true;

    const init = async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });

        await loadAudio();
      } catch (e) {
        console.log(e);
      }
    };

    init();

    return () => {
      isActive = false;
      unloadSound();
    };
  }, [id]);

  // ======================
  // LOAD AUDIO (FIXED)
  // ======================
  const loadAudio = async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    try {
      // stop ของเก่าก่อน
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }

      const { sound } = await Audio.Sound.createAsync(
        song.audio,
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );

      soundRef.current = sound;

      setIsPlaying(false);
      setPosition(0);
      setDuration(0);

    } catch (error) {
      console.log('loadAudio error:', error);
    }

    loadingRef.current = false;
  };

  // ======================
  // STATUS UPDATE
  // ======================
  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) return;

    setPosition(status.positionMillis);
    setDuration(status.durationMillis || 0);
    setIsPlaying(status.isPlaying);
  };

  // ======================
  // PLAY / PAUSE
  // ======================
  const togglePlay = async () => {
    try {
      if (!soundRef.current) return;

      const status = await soundRef.current.getStatusAsync();

      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
      } else {
        await soundRef.current.playAsync();
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ======================
  // UNLOAD
  // ======================
  const unloadSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ======================
  // TIME FORMAT
  // ======================
  const formatTime = (millis) => {
    if (!millis) return '0:00';
    const sec = Math.floor(millis / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progress = duration ? position / duration : 0;

  return (
    <ImageBackground
      source={song.image}
      style={styles.container}
      blurRadius={12}
    >
      <View style={styles.overlay}>

        {/* BACK */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            await unloadSound();
            navigation.goBack();
          }}
        >
          <Text style={styles.backText}>← กลับ</Text>
        </TouchableOpacity>

        <Text style={styles.nowPlaying}>Now Playing</Text>

        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>

        {/* COVER */}
        <View style={styles.coverBox}>
          <Image source={song.image} style={styles.coverImage} />
        </View>

        {/* PROGRESS */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress * 100}%` },
              ]}
            />
          </View>

          <View style={styles.timeRow}>
            <Text style={styles.time}>{formatTime(position)}</Text>
            <Text style={styles.time}>{formatTime(duration)}</Text>
          </View>
        </View>

        {/* CONTROLS */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <Text style={styles.controlIcon}>⏮</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playButton}
            onPress={togglePlay}
          >
            <Text style={styles.playIcon}>
              {isPlaying ? '⏸' : '▶'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.controlIcon}>⏭</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

// styles เหมือนเดิมได้เลย
const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  backButton: { position: 'absolute', left: 20, top: 55 },
  backText: { color: '#fff' },
  nowPlaying: { color: '#ddd' },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  artist: { color: '#eee', fontSize: 18, marginBottom: 30 },
  coverBox: { width: 280, height: 280, borderRadius: 30, overflow: 'hidden' },
  coverImage: { width: '100%', height: '100%' },
  progressContainer: { width: '100%', marginTop: 30 },
  progressBackground: { height: 6, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 10 },
  progressFill: { height: 6, backgroundColor: '#fff' },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  time: { color: '#fff' },
  controls: { flexDirection: 'row', marginTop: 40 },
  controlIcon: { fontSize: 35, color: '#fff', marginHorizontal: 25 },
  playButton: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  playIcon: { fontSize: 38, color: '#000' },
});