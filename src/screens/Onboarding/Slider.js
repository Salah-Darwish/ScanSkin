import {Animated, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState,} from 'react';
import Slides from '../../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import { colors } from '../../utls/colors';
const Slider = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
const slidesRef=useRef(null)
  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };
  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

const scrollTo = () => {
  if (index < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: index + 1});
  } else {
    console.log('Last item.');
  }
};


  return (
    <View style={{
      backgroundColor:"#fefdf5"
    }}>
          <Button title='Skip' color={colors.text}
onPress={
  ()=>{
    navigation.navigate("Login")
      }}
/>
      <FlatList
        snapToAlignment="center"
        pagingEnabled
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        horizontal={true}
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        ref={slidesRef}
      />
 
<Pagination data={Slides} scrollX={scrollX} index={index} />
 
    </View>
    
  );
};

export default Slider;

const styles = StyleSheet.create({});
