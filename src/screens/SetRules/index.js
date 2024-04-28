import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import styles from "./styles";
import Customtext from "../../component/text";
import { verticalScale } from "react-native-size-matters";
import CustomButton from "../../component/CustomButton";
import {useDispatch,useSelector} from 'react-redux'; 
import { SetRules } from "../../redux/actions";
import { shOWError } from "../../utls/helperFunction";
import { useUpadateEffect } from "../../utls/useUpdateEffect";
export default function Setrules({navigation}){
    const dispatch=useDispatch();
    const success=useSelector(state=>state.auth.RulesSuccess)
    const [Rule,setRule]=useState(true)
 const failure=useSelector(state=>state.auth.RulesFailure)

useUpadateEffect(()=>{
navigation.navigate('RulesDoctor');
},[success])
useUpadateEffect(()=>{
shOWError('Rules Failed')
},[failure])
const doneHandler=()=>{
dispatch(SetRules('Doctor'))
  };
    return(
<ImageBackground source={require('../../assets/background.jpg')} style={styles.ImageContainer}>
<View style={styles.containerText}>
<Customtext text={"Type of account"} styleText={styles.styleText}/>
<Customtext text={"Choose type of your account"} styleText={[styles.styleText,{fontWeight:"0",marginTop:verticalScale(10),}]}/>
</View>
<View style={styles.ContainerButton}>
    <CustomButton styleButton={styles.Button} text={"Doctor\n\n you can contact with your\n patients easily and access\n    thier medical records"} 
    styletext={styles.TextButton} isImage src={require('../../assets/doctor.jpg')} StyleImage={styles.styleImage}
    OnPress={doneHandler}
    /> 
     <CustomButton styleButton={styles.Button} text={"Patient\n\n you can Keeping track of\n your skin,and find best\n    doctors for periodic"} 
    styletext={styles.TextButton} isImage src={require('../../assets/patient.jpg')} StyleImage={styles.styleImage}/>    
</View>
</ImageBackground>
    ); 
}