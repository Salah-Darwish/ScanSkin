import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import { Doctors_Rules } from '../../../../Formik/initialValues';
import { DoctorsRulesSchema } from '../../../../Formik/schema';
import { Formik } from 'formik';
import Input from '../../../../component/Input';
import { Rules_Doctor } from '../../../../redux/actions';
import CustomButton from '../../../../component/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Customtext from '../../../../component/text';
import styles from '../styles';
import { verticalScale, scale } from 'react-native-size-matters';
import StylesGloba from '../../../../Styles/Styles';
import { colors } from '../../../../utls/colors';
import CustomTouchIcon from '../../../../component/CustomTouchIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageCustom from '../../../../component/ImageCustom';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useUpadateEffect } from '../../../../utls/useUpdateEffect';

export default function Form() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isRulesDoctor);
  const success = useSelector(state => state.auth.RulesDoctorSuccess);
  const [show, setShow] = useState(false);
  const [imageUri, setImageUri] = useState(null);
const navigation=useNavigation()
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
  return (
    <Formik
      initialValues={Doctors_Rules}
      validateOnMount={true}
      validationSchema={DoctorsRulesSchema}
      onSubmit={async (values) => {
  const formdata = new FormData();

        formdata.append('Experience', values.Experience);
        formdata.append('Price', values.Price);
        formdata.append('AddressLocation', values.AddressLocation);
        formdata.append('AddressDescription', values.AddressDescription);
        formdata.append('Speciality', values.Speciality);
           formdata.append('Profile_Picture', {
          uri: imageUri,
        name: imageInformation.fileName,
       type:imageInformation.type,
        });
        formdata.append('StartHour', values.StartHour);
        formdata.append('EndHour', values.EndHour);
     
        dispatch(Rules_Doctor(formdata));
        console.log(formdata);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <>
          <View style={styles.container}>
            <Customtext text={"Complete info."} styleText={styles.text} />
            <View style={styles.ImgCon}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.ImageStyle} />
              ) : (
                <ImageCustom styleImage={styles.ImageStyle} src={require('../../../../assets/user(1).png')} />
              )}
              <CustomTouchIcon
                StyleTouch={styles.styleTouIcon}
                StyleImg={styles.styleImgIc}
                src={require('../../../../assets/pencil.png')}
                OnPress={() => setShow(true)}
              />
            </View>
          </View>
          <KeyboardAwareScrollView
            extraHeight={verticalScale(35)}
            enableOnAndroid
          >
            <View style={styles.container}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: verticalScale(70) }}>
                <Input
                  placeholder={"Experience"}
                  color={colors.text}
                  styleInput={styles.input}
                  keyboard={"numeric"}
                  value={values.Experience}
                  onChangeText={handleChange('Experience')}
                  onBlur={handleBlur('Experience')}
                />
                {errors.Experience && touched.Experience && (
                  <Customtext text={errors.Experience} styleTextCustom={StylesGloba.error} />
                )}
                <Input
                  placeholder={"Price"}
                  color={colors.text}
                  styleInput={[styles.input, { marginLeft: scale(30) }]}
                  keyboard={"numeric"}
                  value={values.Price}
                  onChangeText={handleChange('Price')}
                  onBlur={handleBlur('Price')}
                />
                {errors.Price && touched.Price && (
                  <Customtext text={errors.Price} styleTextCustom={StylesGloba.error} />
                )}
              </View>
              <Input
                placeholder={"Location"}
                color={colors.text}
                styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                keyboard={"default"}
                value={values.AddressLocation}
                onChangeText={handleChange('AddressLocation')}
                onBlur={handleBlur('AddressLocation')}
              />
              {errors.AddressLocation && touched.AddressLocation && (
                <Customtext text={errors.AddressLocation} styleTextCustom={StylesGloba.error} />
              )}
              <Input
                placeholder={"Address description"}
                color={colors.text}
                styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                keyboard={"default"}
                value={values.AddressDescription}
                onChangeText={handleChange('AddressDescription')}
                onBlur={handleBlur('AddressDescription')}
              />
              {errors.AddressDescription && touched.AddressDescription && (
                <Customtext text={errors.AddressDescription} styleTextCustom={StylesGloba.error} />
              )}
              <Input
                placeholder={"Speciality"}
                color={colors.text}
                styleInput={[styles.inputStyle, { marginTop: verticalScale(20) }]}
                keyboard={"default"}
                value={values.Speciality}
                onChangeText={handleChange('Speciality')}
                onBlur={handleBlur('Speciality')}
              />
              {errors.Speciality && touched.Speciality && (
                <Customtext text={errors.Speciality} styleTextCustom={StylesGloba.error} />
              )}
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Input
                  placeholder={"Start"}
                  color={colors.text}
                  styleInput={styles.input}
                  keyboard={"default"}
                  value={values.StartHour}
                  onChangeText={handleChange('StartHour')}
                  onBlur={handleBlur('StartHour')}
                />
                {errors.StartHour && touched.StartHour && (
                  <Customtext text={errors.StartHour} styleTextCustom={StylesGloba.error} />
                )}
                <Input
                  placeholder={"End"}
                  color={colors.text}
                  styleInput={[styles.input, { marginLeft: scale(30) }]}
                  keyboard={"default"}
                  value={values.EndHour}
                  onChangeText={handleChange('EndHour')}
                  onBlur={handleBlur('EndHour')}
                />
                {errors.EndHour && touched.EndHour && (
                  <Customtext text={errors.EndHour} styleTextCustom={StylesGloba.error} />
                )}
              </View>
            </View>
            <View style={[styles.container, { marginTop: verticalScale(20) }]}>
              <CustomButton
                text={'Continue'}
                styletext={[styles.subtext, { marginTop: 0 }]}
                styleButton={styles.styleButton}
                OnPress={handleSubmit}
                isLoading={isLoading}
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
