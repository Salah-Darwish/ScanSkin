import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MyStyles from './styles';
import { colors } from "../../../utls/colors";
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import ImageCustom from '../../../component/ImageCustom';
import Customtext from '../../../component/text';
import CustomTouchIcon from '../../../component/CustomTouchIcon';
import Input from '../../../component/Input';
import StylesGloba from '../../../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorsData } from '../../../redux/actions';
import { useUpadateEffect } from '../../../utls/useUpdateEffect';
import { shOWError } from '../../../utls/helperFunction';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const Success = useSelector(state => state.homePatient.DoctorsDataSuccess);
  const Loading = useSelector(state => state.homePatient.isAllDoctorsData);
  const error = useSelector(state => state.homePatient.DoctorsDataFailure);

  useUpadateEffect(() => {
    shOWError('Failed to load doctors data');
  }, [error]);

  useEffect(() => {
    dispatch(fetchDoctorsData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {Loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      
      <View style={styles.header}>
        <View style={styles.profile}>
          <ImageCustom src={require('../../../assets/handsome-bearded-guy-posing-against-white-wall.jpg')} styleImage={styles.ImageHeader} />
          <View>
            <Customtext styleText={styles.TextHeader} text="Hello!" />
            <Customtext styleText={styles.TextHeader} text="Omar" />
          </View>
        </View>
        <CustomTouchIcon 
          src={require('../../../assets/bell.png')} 
          StyleImg={styles.NavigationIconStyle}
     OnPress={()=>{
      navigation.navigate('NotifactionPatient')
     }}
        />
      </View>
      
      <View style={styles.searchbox}>
        <Image source={require('../../../assets/magnifying-glass(1).png')} style={{ width: scale(20), height: scale(20) }} />
        <TextInput style={styles.textInput} placeholder='Search for doctors' placeholderTextColor={colors.text} />
      </View>
      
      <View style={styles.Nextappointment}>
        <View style={{ width: scale(20), height: scale(120), borderWidth: scale(1), borderTopLeftRadius: scale(10), borderBottomLeftRadius: scale(10), borderColor: colors.white }}>
          <LinearGradient colors={['#D8A276', '#F8ECDE']} style={styles.linearGradient} />
        </View>
        <View style={{ width: scale(160), height: scale(100), justifyContent: 'space-around', alignItems: 'center', paddingVertical: scale(8) }}>
          <Text style={{ fontSize: scale(16), color: colors.text, fontWeight: '500' }}>Next appointment with</Text>
          <Text style={{ fontSize: scale(13), color: colors.text, marginTop: verticalScale(2) }}>Dr. Ahmed At 4:30 pm</Text>
          <TouchableOpacity style={styles.buttonRemind}>
            <Text style={{ fontSize: scale(15), color: colors.white }}>Remind later</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../assets/8608880_3959419.jpg')} style={{ width: scale(80), height: scale(90), marginRight: scale(5) }} />
      </View>
      
      <View style={styles.medRemind}>
        <Text style={{ fontSize: scale(18), fontWeight: '500', color: '#7A441A' }}>Appointments</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: scale(15), color: colors.textsin }}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={Success}
        renderItem={({ item }) => (
          <View style={styles.doctorBox} key={item.id}>
            <Image source={{ uri: item.pictureUrl }} style={{ width: scale(75), height: scale(80), marginLeft: scale(20), borderRadius: scale(10), overflow: 'hidden' }} />
            <View>
              <View style={styles.docAppoint}>
                <Text style={{ fontSize: scale(13), color: colors.Actdot, }}>{item.displayName}</Text>
                <Text style={{ fontSize: scale(13), color: colors.text, }}>Offline</Text>
              </View>
              <View style={styles.docAppoint}>
                <View style={{ width: scale(72), height: scale(20), backgroundColor: '#F8ECDE', paddingHorizontal: scale(4), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: scale(3) }}>
                  <Image source={require('../../../assets/clock.png')} resizeMode='contain' style={{ width: scale(15), height: scale(20) }} />
                  <Text style={{ fontSize: scale(11), color: colors.text }}> 4:30 pm</Text>
                </View>
                <View style={{ width: scale(60), height: scale(20), backgroundColor: '#F8ECDE', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: scale(3) }}>
                  <Image source={require('../../../assets/calendar(1).png')} resizeMode='contain' style={{ width: scale(15), height: scale(20) }} />
                  <Text style={{ fontSize: scale(11), color: colors.text }}> 2 Feb</Text>
                </View>
              </View>
              <View style={styles.docAppoint}>
                <View style={{ width: scale(93), height: scale(20), backgroundColor: '#F8ECDE', paddingHorizontal: scale(4), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: scale(3) }}>
                  <Image source={require('../../../assets/placeholder.png')} resizeMode='contain' style={{ width: scale(15), height: scale(20) }} />
                  <Text style={{ fontSize: scale(11), color: colors.text }}>{item.addressDescription}</Text>
                </View>
                <View style={{ width: scale(98), height: scale(20), backgroundColor: '#F8ECDE', paddingHorizontal: scale(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: scale(3) }}>
                  <Image source={require('../../../assets/call.png')} resizeMode='contain' style={{ width: scale(15), height: scale(20) }} />
                  <Text style={{ fontSize: scale(11), color: colors.text }}> 01115468254</Text>
                </View>
              </View>
            </View>
          </View>
        )}
  
      />

      <View style={styles.medRemind}>
        <Text style={{ fontSize: scale(18), fontWeight: '500', color: '#7A441A' }}>Nearby Doctors</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: scale(15), color: colors.textsin }}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.scrolView}>
          <View style={styles.docNearby}>
            <Image source={require('../../../assets/docgirl.jpg')} style={{ width: scale(70), height: scale(70), borderRadius: scale(35) }} />
            <Text style={{ fontSize: scale(17), color: colors.Actdot }}>Dr. Eman</Text>
            <Text style={{ fontSize: scale(12), color: colors.Actdot }}>Dermatologist</Text>
            <Text style={{ fontSize: scale(12), color: colors.Actdot }}>Said ST. Tanta</Text>
            <View style={{ width:scale(320), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image source={require('../../../assets/starrate.png')} style={{ width: scale(20), height: scale(20) }} />
              <Text style={{ fontSize: scale(14), color: colors.Actdot }}>4.9</Text>
            </View>
          </View>

          <View style={styles.docNearby}>
            <Image source={require('../../../assets/docgirl.jpg')} style={{ width: scale(70), height: scale(70), borderRadius: scale(35) }} />
            <Text style={{ fontSize: scale(17), color: colors.Actdot }}>Dr. Maha</Text>
            <Text style={{ fontSize: scale(12), color: colors.Actdot }}>Dermatologist</Text>
            <Text style={{ fontSize: scale(12), color: colors.Actdot }}>Said ST. Tanta</Text>
            <View style={{ width: scale(320), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image source={require('../../../assets/starrate.png')} style={{ width: scale(20), height: scale(20) }} />
              <Text style={{ fontSize: scale(14), color: colors.Actdot }}>4.9</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ marginTop: scale(20) }}></View>
    </View>
  );
}
