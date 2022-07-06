import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SingInScreen() {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SingInScreen;
