import {StyleSheet, Text, Animated, View, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');
const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, ind) => {
        const inputRange = [(ind - 1) * width, ind * width, (ind + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [15, 32, 15],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={ind.toString()}
            style={[
              styles.dot,
              {width: dotWidth, opacity},
              ind === index && styles.dotActive,
            ]}
          />
        
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '13%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12* width,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#684428',
  },
  dotActive: {
    backgroundColor: '#684428',
  },
});
