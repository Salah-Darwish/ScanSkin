import { StyleSheet, Text, View ,Modal,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import styles from '../styles';
import StylesGloba from '../../../../Styles/Styles';
import { Patient_Rules } from '../../../../Formik/initialValues';
import { PatientRulesSchema } from '../../../../Formik/schema';
import { verticalScale,scale } from 'react-native-size-matters';
import { colors } from '../../../../utls/colors';
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from '../../../../component/CustomButton';
import Input from '../../../../component/Input';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import Customtext from '../../../../component/text';
import { Rules_Patient } from '../../../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import { useUpadateEffect } from '../../../../utls/useUpdateEffect';
import ImageCustom from '../../../../component/ImageCustom';
import CustomTouchIcon from '../../../../component/CustomTouchIcon';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Form() {
    const [isFocus, setIsFocus] = useState(false);
    const dispatch = useDispatch();
  const navigation =useNavigation()
    const isLoading = useSelector(state=>state.auth.isRulesPatient);
    const success = useSelector(state=>state.auth.RulesPatientSuccess);
     const [show, setShow] = useState(false);
  const [imageUri, setImageUri] = useState(null);

const [imageInformation,setImageInformation]=useState(null)

  const pickImage = (type) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      setImageInformation(response.assets[0])
      }
    };

    if (type === 'camera') {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };
  useUpadateEffect(()=>{
       navigation.replace('Login')
  },[success])
    const data = [
        { label: 'A+', value: 'APositive' },
        { label: 'A-', value: 'ANegative' },
        { label: 'B+', value: 'BPositive' },
        { label: 'B-', value: 'BNegative' },
        { label: 'O+', value: 'OPositive' },
        { label: 'O-', value: 'ONegative' },
        { label: 'AB+', value: 'ABPositive' },
        { label: 'AB-', value: 'ABNegative' },
    ];

    const data2 = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    return (
        <Formik
            initialValues={Patient_Rules}
            validateOnMount={true}
            validationSchema={PatientRulesSchema}
            onSubmit={async (values) => {
          
           const formdata =new FormData()
           formdata.append('Age', values.Age)
           formdata.append('Height',values.Height)
           formdata.append('Weight',values.Weight)
           formdata.append('gen',values.gen)
           formdata.append('Blood',values.Blood)
           formdata.append('Profile_Picture', {
          uri: imageUri,
        name: imageInformation.fileName,
       type:imageInformation.type,
        });
                dispatch(Rules_Patient(formdata));
                console.log(formdata);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                <>

   <View style={styles.container}>
        <Customtext text={"Medical Sheet"} styleText={styles.text} />
        <View style={styles.ImgCon}>
          {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.ImageStyle} />
              ) : (
                <ImageCustom styleImage={styles.ImageStyle} src={require('../../../../assets/user(1).png')} />
              )}
<CustomTouchIcon StyleTouch={styles.styleTouIcon} StyleImg={styles.styleImgIc} src={require('../../../../assets/pencil.png')} 
OnPress={()=>setShow(true)}
/>
        </View>
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
  <View style={[styles.container, { marginTop: verticalScale(80) }]}>
                        <Input
                            placeholder={"Age"}
                            color={colors.text}
                            styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                            keyboard={"default"}
                            value={values.Age}
                            onChangeText={handleChange('Age')}
                            onBlur={handleBlur('Age')}
                        />
                        {(errors.Age && touched.Age) && <Customtext text={errors.Age} styleTextCustom={StylesGloba.error} />}
                        
                        <Input
                            placeholder={"Height"}
                            color={colors.text}
                            styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                            keyboard={"default"}
                            value={values.Height}
                            onChangeText={handleChange('Height')}
                            onBlur={handleBlur('Height')}
                        />
                        {(errors.Height && touched.Height) && <Customtext text={errors.Height} styleTextCustom={StylesGloba.error} />}
                        
                        <Input
                            placeholder={"Weight"}
                            color={colors.text}
                            styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                            keyboard={"default"}
                            value={values.Weight}
                            onChangeText={handleChange('Weight')}
                            onBlur={handleBlur('Weight')}
                        />
                        {(errors.Weight && touched.Weight) && <Customtext text={errors.Weight} styleTextCustom={StylesGloba.error} />}
                        
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: colors.notAct }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            itemContainerStyle={styles.itemContainer}
                            itemTextStyle={styles.itemTextStyle}
                            data={data2}
                            maxHeight={verticalScale(300)}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Gender' : 'Choose gender type'}
                            value={values.gen}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                handleChange('gen')(item.value);
                                setIsFocus(false);
                            }}
                        />
                        {(errors.gen && touched.gen) && <Customtext text={errors.gen} styleTextCustom={StylesGloba.error} />}
                        
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: colors.notAct }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            itemContainerStyle={styles.itemContainer}
                            itemTextStyle={styles.itemTextStyle}
                            data={data}
                            maxHeight={verticalScale(300)}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Blood Type' : 'Choose blood type'}
                            value={values.Blood}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                handleChange('Blood')(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                    <View style={[styles.container, { marginTop: verticalScale(20) }]}>
                        <CustomButton
                            text={'Confirm'}
                            styletext={[styles.subtext, { marginTop: 0 }]}
                            styleButton={[styles.styleButton]}
                            isLoading={isLoading}
                            OnPress={handleSubmit}
                        />
                    </View>
       
     </KeyboardAwareScrollView>
  <Modal
            visible={show}
            onDismiss={() => setShow(false)}
            onRequestClose={() => setShow(false)}
            transparent={true}
          >
            <Animatable.View
              duration={1000}
              style={{
                width: scale(320),
                height: verticalScale(150),
                borderRadius: scale(20),
                backgroundColor: colors.bacImg,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: verticalScale(140),
                marginLeft: scale(17),
              }}
              animation="slideInDown"
            >
              <CustomButton
                text={'Open Camera'}
                styletext={[styles.subtext, { marginTop: 0 }]}
                styleButton={styles.styleButton}
                OnPress={() =>{
                  setShow(false)
                   pickImage('camera')
                }
                  }
              />
              <CustomButton
                text={'Open Gallery'}
                styletext={[styles.subtext, { marginTop: 0 }]}
                styleButton={styles.styleButton}
                OnPress={() =>{
                  setShow(false)
  pickImage('library')}
                }
               
              />
            </Animatable.View>
          </Modal>

                  
                </>
            )}
        </Formik>
    );
}
