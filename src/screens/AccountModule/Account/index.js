import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { LogOut } from '../../../redux/actions';
import CustomButton from '../../../component/CustomButton';
import MyStyles from './styles';

export default function AccountScreen() {
    const dispatch = useDispatch();
    const SignOut = () => dispatch(LogOut());

    return (
        <View style={{ flex: 1, paddingHorizontal: scale(15), backgroundColor: colors.backgr }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow}>
                    <FontAwesome name='angle-left' size={scale(20)} color='#684428' />
                </TouchableOpacity>
                <Text style={{ fontSize: scale(20), color: '#7A441A', fontWeight: '500' }}>Profile</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: scale(16), color: colors.textsin }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flexGrow: 1 }}>
                <View style={{ marginTop: scale(15), alignItems: 'center' }}>
                    <Image source={require('../../../assets/young-bearded-man-with-striped-shirt.jpg')} style={{ width: scale(90), height: scale(90), borderRadius: scale(45) }} />
                    <View style={{ marginTop: scale(8) }}>
                        <Text style={{ fontSize: scale(23), color: colors.Actdot }}>Omar Ali</Text>
                    </View>
                </View>
             
                <View style={{ marginTop: scale(15), padding: scale(7) }}>
                    <View>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Age</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>35</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Weight</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>90</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Height</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>180</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Gender</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>Male</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Blood Type</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>O</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ fontSize: scale(17), color: '#7A441A' }}>Phone</Text>
                        <Text style={{ fontSize: scale(14), color: '#AE7D59' }}>01222457865</Text>
                        <Text style={{ fontSize: scale(13), color: '#AE7D59' }}>─────────────────────────────</Text>
                    </View>
                </View>
                   <CustomButton
                styleButton={MyStyles.ButtonStyle}
                    text={"Sign Out"}
                    styleText={MyStyles.TextStyle}
                    OnPress={SignOut}
                />
            </ScrollView>
        </View>
    );
}

const styles = ScaledSheet.create({
    header: {
        width: scale(320),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(12)
    },
    arrow: {
        width: scale(30),
        height: verticalScale(30),
        borderRadius: scale(15),
        backgroundColor: colors.backgr,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.notAct,
        shadowOpacity: scale(0.9),
        elevation: scale(6),
        shadowRadius: scale(8),
        shadowOffset: { width: scale(56), height: scale(13) },
    }
});
