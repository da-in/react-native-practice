import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({logs, onScrolledToBottom, ListHeaderComponent}) {
  const onScroll = e => {
    if (!onScrolledToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromtBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (distanceFromtBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
