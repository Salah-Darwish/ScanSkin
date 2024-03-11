import {StyleSheet, Text, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import { colors } from '../../utls/colors';
import { ScaledSheet } from 'react-native-size-matters';
const {width} = Dimensions.get('screen');
const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, ind) => {
        const inputRange = [(ind - 1) * width, ind * width, (ind + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
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

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    bottom: '120@s',
    flexDirection: 'row',
    width: '350@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: '12@s',
    height: '12@s',
    borderRadius: '6@s',
    marginHorizontal: '3@s',
    backgroundColor: colors.notAct,
  },
  dotActive: {
    backgroundColor: colors.Actdot,
  },
});
