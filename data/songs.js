import { Audio } from 'expo-av';
const SONGS = [

  {
    id: 1,
    title: 'เพลงที่ 1',
    artist: 'เป็ด ก้าบ ก้าบ',
    time: '5:41',
    icon: '🦆',
    audio: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/song1.mp3' },
    image: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/image1.jpg' },
  },
  {
    id: 2,
    title: 'เพลงที่ 2',
    artist: 'เบบี้ชาร์ค',
    time: '3:26',
    icon: '🦈',
    audio: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/song2.mp3' },
    image: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/image3.jpg' },
  },
  {
    id: 3,
    title: 'เพลงที่ 3',
    artist: 'ก เอ๋ย ก ไก่',
    time: '4:09',
    icon: '🐓',
    audio: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/song3.mp3' },
    image: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/image2.jpg' },
  },
  {
    id: 4,
    title: 'เพลงที่ 4',
    artist: 'จับปูดำ ขยำปูนา',
    time: '3:00',
    icon: '🦀',
    audio: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/song4.mp3' },
    image: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/image4.jpg' },
  },
  {
    id: 5,
    title: 'เพลงที่ 5',
    artist: 'อึ่งอ่าง ข้างโอ่ง',
    time: '4:09',
    icon: '🐸',
    audio: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/song5.mp3' },
    image: { uri: 'https://cdn.jsdelivr.net/gh/368345221034-st-star/content/image5.jpg' },
  },
];

export default SONGS;