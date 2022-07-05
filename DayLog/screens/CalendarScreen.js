import React from 'react';
import {StyleSheet, View} from 'react-native';
import CalendarView from '../components/CalendarView';

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <CalendarView />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
