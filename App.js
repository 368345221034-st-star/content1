import React from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import PlayerScreen from './screens/PlayerScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// =====================================
// MUSIC STACK
// =====================================
function MusicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CC9F0',
        },
        headerTintColor: '#FFFFFF',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#F5FBFF',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '🎵 แอปเพลงเด็ก' }}
      />

      <Stack.Screen
        name="Next"
        component={DetailScreen}
        options={{ title: '🌈 รายการเพลง' }}
      />

      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


// =====================================
// APP
// =====================================
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            position: 'absolute',
            bottom: 15,
            left: 20,
            right: 20,
            height: 75,
            backgroundColor: '#FFFFFF',
            borderRadius: 40,
            borderTopWidth: 0,
            elevation: 12,
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowRadius: 12,
            paddingTop: 10,
          },

          tabBarActiveTintColor: '#0096C7',
          tabBarInactiveTintColor: '#A0AEC0',

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 8,
          },

          tabBarIcon: ({ focused }) => {
            let icon = '🎵';

            // ⭐ เพิ่ม "หน้าหลัก"
            if (route.name === 'หน้าหลัก') {
              icon = focused ? '🏠' : '🏡';
            }

            if (route.name === 'เพลง') {
              icon = focused ? '🎶' : '🎵';
            }

            if (route.name === 'บัญชี') {
              icon = focused ? '🧑' : '👤';
            }

            return (
              <View style={[
                styles.iconBox,
                focused && styles.activeIconBox
              ]}>
                <Text style={styles.icon}>
                  {icon}
                </Text>
              </View>
            );
          },
        })}
      >

        {/* ⭐ TAB หน้าหลัก (เพิ่มใหม่) */}
        <Tab.Screen
          name="หน้าหลัก"
          component={HomeScreen}
        />

        {/* TAB เพลง */}
        <Tab.Screen
          name="เพลง"
          component={MusicStack}
        />

        {/* TAB บัญชี */}
        <Tab.Screen
          name="บัญชี"
          component={ProfileScreen}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


// =====================================
// STYLE
// =====================================

const styles = StyleSheet.create({
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeIconBox: {
    backgroundColor: '#CAF0F8',
    transform: [{ scale: 1.1 }],
  },

  icon: {
    fontSize: 25,
  },
});