import { View, Text,ImageBackground, Alert } from 'react-native'
import React from 'react'
import Customtext from '../../component/text'
import styles from './styles'
import CustomButton from '../../component/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale, verticalScale } from 'react-native-size-matters'
import Input from '../../component/Input'
import { colors } from '../../utls/colors'
import ImageCustom from '../../component/ImageCustom'
import CustomTouchIcon from '../../component/CustomTouchIcon'
import useInput from '../../utls/useInput'
import { useUpadateEffect } from '../../utls/useUpdateEffect'
import { useSelector,useDispatch } from 'react-redux'
import { shOWError } from '../../utls/helperFunction'
import { Rules_Doctor } from '../../redux/actions'
export default function RulesDoctor({navigation}) {
  const [Experience,ChangeExper]=useInput({initialInput:'',rules:[{Key:'Experience'}]});  
 const [Price,changePrice]=useInput({initialInput:'',rules:[{Key:'Price'}]}); 
 const [Location,ChangeLocation]=useInput({initialInput:'',rules:[{Key:'Location'}]}); 
 const [Addressdescription,changeAddressdescription]=useInput({initialInput:'',rules:[{Key:'Location'}]}); 
 const [Speciality,changeSpeciality]=useInput({initialInput:'',rules:[{Key:'Location'}]});
const [StartTime,ChangeStartTime]=useInput({initialInput:'',rules:[{Key:'TimeCom'}]});
  const [EndTime,ChangeEndTime]=useInput({initialInput:'',rules:[{Key:'TimeCom'}]});
 const isLoading=useSelector(state=>state.auth.isRulesDoctor); 
 const success=useSelector(state=>state.auth.RulesDoctorSuccess)
 const failure=useSelector(state=>state.auth.RulesDoctorFailure)

 const dispatch=useDispatch(); 
 useUpadateEffect(()=>{
  navigation.navigate('Login')
 },[success]); 
 useUpadateEffect(()=>{
shOWError('DoctorRules Failed')
},[failure])
const doneHandler = () => {
  const formData=new FormData(); 
 formData.append('Experience',Experience.value); 
 formData.append('Price',Price.value); 
 formData.append('AddressLocation',Location.value); 
 formData.append('AddressDescription',Addressdescription.value); 
 formData.append('Speciality',Speciality.value); 
 formData.append('StartDay',StartTime.value); 
 formData.append('EndDay',EndTime.value);
 console.log(formData);
  if (
    Experience.isValid &&
    Price.isValid &&
    Location.isValid &&
    Addressdescription.isValid &&
    Speciality.isValid &&
    StartTime.isValid &&
    EndTime.isValid
  ) {
    console.log("Exper: " + Experience.value + " Price " + Price.value);
    dispatch(Rules_Doctor(formData));
  } 
};
 
  return (
     <ImageBackground source={require('../../assets/background.jpg')} style={styles.imageContainer}>
      <View style={styles.container}>
        <Customtext text={"Compelete info."} styleText={styles.text} />
        <View style={styles.ImgCon}>
       <ImageCustom styleImage={styles.ImageStyle} src={require('../../assets/user(1).png')}/>
<CustomTouchIcon StyleTouch={styles.styleTouIcon} StyleImg={styles.styleImgIc} src={require('../../assets/pencil.png')} />
        </View>
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
          <View style={styles.container}>
            <View style={{
              flexDirection:'row', 
          justifyContent:'space-evenly',
          marginTop:verticalScale(70)
              
            }}>
            <Input placeholder={"Experience"} color={colors.text} styleInput={styles.input} keyboard={"numeric"}
            value={ChangeExper}
            />
            <Input placeholder={"Price"} color={colors.text} styleInput={[styles.input,{marginLeft:scale(30)}]} keyboard={"numeric"}
            value={changePrice}
            />
           </View>
            <Input placeholder={"Location"} color={colors.text} styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]} keyboard={"default"} 
            value={ChangeLocation}
            />
            <Input placeholder={"Address description"} color={colors.text} styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}  keyboard={"default"}
          value={changeAddressdescription}
            />
                  <Input placeholder={"Speciality"} color={colors.text} styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}  keyboard={"default"}
        value={changeSpeciality}
            />
            <View style={{
              flexDirection:'row', 
          justifyContent:'space-evenly'
              
            }}>
            <Input placeholder={"Start"} color={colors.text} styleInput={styles.input} keyboard={"default"}
            value={ChangeStartTime}
            />
            <Input placeholder={"End"} color={colors.text} styleInput={[styles.input,{marginLeft:scale(30)}]} keyboard={"default"} 
            value={ChangeEndTime}
            />
           </View>
          </View>
        <View style={[styles.container,{marginTop:verticalScale(20)}]}>
          <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton,]}
           OnPress={doneHandler}
          isLoading={isLoading}
          />
        </View>
       
     </KeyboardAwareScrollView>
         
    </ImageBackground>
  )

}