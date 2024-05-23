import React, { useState } from "react";
import { ImageBackground, View, Text } from "react-native";
import styles from "./styles";
import Customtext from "../../../component/text";
import { verticalScale } from "react-native-size-matters";
import CustomButton from "../../../component/CustomButton";
import { useDispatch, useSelector } from 'react-redux';
import { SetRules } from "../../../redux/actions";
import { shOWError } from "../../../utls/helperFunction";
import { useUpadateEffect } from "../../../utls/useUpdateEffect";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../utls/colors";

export default function SetRulesAccount({ navigation }) {
    const dispatch = useDispatch();
    const success = useSelector(state => state.auth.RulesSuccess);
    const failure = useSelector(state => state.auth.RulesFailure);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useUpadateEffect(() => {
        if (success) {
            if (role === "User") {
                navigation.replace('RulesPatient');
            } else {
                navigation.replace('RulesDoctor');
            }
            setLoading(false);
        }
    }, [success]);

    useUpadateEffect(() => {
        if (failure) {
            shOWError('Rules Failed');
            setError('Failed to set rules. Please try again.');
            setLoading(false);
        }
    }, [failure]);

    const doneHandler = (selectedRole) => {
        setRole(selectedRole);
        setLoading(true);
        setError('');
        dispatch(SetRules(selectedRole));
    };

    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.ImageContainer}>
            <View style={styles.containerText}>
                <Customtext text={"Type of account"} styleText={styles.styleText} />
                <Customtext text={"Choose type of your account"} styleText={[styles.styleText, { fontWeight: "0", marginTop: verticalScale(10) }]} />
            </View>
            <View style={styles.ContainerButton}>
                <CustomButton styleButton={styles.Button} text={"Doctor\n\n you can contact with your\n patients easily and access\n    their medical records"}
                    styletext={styles.TextButton} isImage src={require('../../../assets/doctor.jpg')} StyleImage={styles.styleImage}
                    OnPress={() => {
                        doneHandler('Doctor');
                    }}
                />
                {loading && role === 'Doctor' && <ActivityIndicator color={colors.bacImg} />}
                <CustomButton styleButton={styles.Button} text={"Patient\n\n you can Keeping track of\n your skin,and find best\n    doctors for periodic"}
                    styletext={styles.TextButton} isImage src={require('../../../assets/patient.jpg')} StyleImage={styles.styleImage}
                    OnPress={() => {
                        doneHandler('User');
                    }}
                />
                {loading && role === 'User' && <ActivityIndicator color={colors.bacImg} />}
            </View>
            {error ? <Text>{error}</Text> : null}
        </ImageBackground>
    );
}
