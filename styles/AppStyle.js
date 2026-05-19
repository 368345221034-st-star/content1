import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({

  // ======================================
  // GLOBAL / HOME
  // ======================================

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF8FF',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 17,
    color: '#5C677D',
    marginBottom: 35,
    textAlign: 'center',
  },

  buttonBox: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },

  startButton: {
    width: 260,
    height: 65,
    backgroundColor: '#00B4D8',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  startButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // ======================================
  // MUSIC LIST
  // ======================================

  musicContainer: {
    flex: 1,
    backgroundColor: '#F4FBFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    color: '#0077B6',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

  playlistTitle: {
    color: '#5C677D',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 18,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconBox: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#CAF0F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  icon: {
    fontSize: 34,
  },

  songTitle: {
    color: '#023E8A',
    fontSize: 22,
    fontWeight: 'bold',
  },

  artist: {
    color: '#6C7A89',
    marginTop: 6,
    fontSize: 15,
  },

  rightSection: {
    alignItems: 'center',
  },

  time: {
    color: '#0096C7',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },

  playIcon: {
    color: '#00B4D8',
    fontSize: 28,
  },

  // ======================================
  // PLAYER SCREEN
  // ======================================

  screen: {
    flex: 1,
    backgroundColor: '#EAF8FF',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 25,
  },

  artwork: {
    width: 280,
    height: 280,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },

  artworkEmoji: {
    fontSize: 120,
  },

  playerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#023E8A',
    marginTop: 35,
    textAlign: 'center',
  },

  playerArtist: {
    fontSize: 18,
    color: '#5C677D',
    marginTop: 10,
    marginBottom: 30,
  },

  progressWrap: {
    width: '100%',
    marginTop: 20,
  },

  progressBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#D9EDFF',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#0077B6', // 🔥 FIX: เพิ่มสีให้ progress
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
  },

  playBtn: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  playIconLarge: {
    color: '#FFFFFF',
    fontSize: 42,
  },

  controlBtn: {
    marginHorizontal: 25,
  },

  controlIcon: {
    fontSize: 35,
    color: '#0077B6',
  },

  // ======================================
  // LYRICS
  // ======================================

  lyricsBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 25,
    marginTop: 40,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  lyricsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 20,
    textAlign: 'center',
  },

  lyrics: {
    fontSize: 18,
    color: '#5C677D',
    lineHeight: 34,
    textAlign: 'center',
  },

  // ======================================
  // PROFILE
  // ======================================

  profileContainer: {
    flex: 1,
    backgroundColor: '#EAF8FF',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  profileTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 30,
  },

  profileCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#023E8A',
    textAlign: 'center',
  },

  profileDetail: {
    fontSize: 15,
    color: '#6C7A89',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AppStyle;