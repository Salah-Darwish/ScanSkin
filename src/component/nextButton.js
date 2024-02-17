import { StyleSheet, Text, TouchableOpacity, View,Animated } from 'react-native';
import React,{useEffect,useRef} from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign'

const NextButton = ({percentage,scrollTo}) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
const progressAnimated=useRef(new Animated.Value(0)).current;
const progressRef=useRef(null);
const animation=(toValue)=>{
  return Animated.timing(progressAnimated,{
    toValue,
    duration:250,
    useNativeDriver:true
  }).start();
}; 
useEffect(()=>{
  animation(percentage);
},[percentage]);
useEffect(()=>{
  progressAnimated.addListener((value)=>{
const strokeDashoffset=circumference-(circumference*value.value)/100;

if(progressRef?.current){
  progressRef.current.setNativeProps({
    strokeDashoffset
  })
}
  },[percentage]); 
  return ()=>{
    progressAnimated.removeAllListeners(); 
  }
},[])
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={"-90"} origin={center}>
        <Circle 
      stroke={"#fff"}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
        ref={progressRef}
          stroke={"#F4338F"}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        
        />
          </G>
      </Svg>
    <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
<Icon name="arrowright" size={30} color="#fff"/>
    </TouchableOpacity>
    </View>
  );
}

export default NextButton;

const styles = StyleSheet.create({
  container: {
   position:'absolute',
   bottom:5, 
left:145, 
alignItems:'center',
justifyContent:'center'
  },
  button:{
  position:"absolute", 
  backgroundColor:'#f4338f', 
  borderRadius:100,
  width:70,
  height:70,
  alignItems:'center',
  justifyContent:'center'

  
  }

});
