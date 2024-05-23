import * as Yup from 'yup';

const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const timeRegExp=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Enter your Email').matches(EmailReg, 'Enter Email Correct'),
    password: Yup.string().required('Enter Your Password').min(8, 'Enter Your Password Correct'),
})
export const RegistSchema = Yup.object().shape({
    displayName: Yup.string().required('Enter Your name'),
    email: Yup.string().required('Enter your Email').matches(EmailReg, 'Enter Email Correct'),
    phoneNumber:Yup.string().required('Enter ypur phone').matches(phoneRegExp,'Enter Phone Correct 11 number +20'),
    password: Yup.string().required('Enter Your Password').min(8, 'password don\'t less 8 numbers and words '),
    confirmPassword: Yup.string().required('Enter Your Password').min(8, 'password don\'t less 8 numbers and words').oneOf([Yup.ref('password'), null], "The Password and Confirm Password is different"),
})

export const ForgetPasswordSchema=Yup.object().shape({
     email: Yup.string().required('Enter your Email').matches(EmailReg, 'Enter Email Correct'),
})
export const ResetPasswordConfirmation=Yup.object().shape({
    confirmationCode:Yup.string().required('Enter the code').min(6,'Please enter valid code number')
})
export const ResetPasswordSchema=Yup.object().shape({
 newPassword: Yup.string().required('Enter Your new Password').min(8, 'password don\'t less 8 numbers and words '),

})

export const PatientRulesSchema=Yup.object().shape({
    Age:Yup.number().required('Enter Your Age'), 
    Height:Yup.number().required('Enter Your Height'), 
    Weight:Yup.number().required('Enter Your Weight'), 
    gen:Yup.string().required("Please choose the Gender"), 
    Blood:Yup.string().required('Please Chosse the Blood')
})


export const DoctorsRulesSchema=Yup.object().shape({
    Experience:Yup.number().required('Enter Your Experience'), 
   Price:Yup.number().required('Enter Your Price'), 
   AddressLocation:Yup.string().required('Enter Your Address Location'),
   AddressDescription:Yup.string().required("Enter Your Address Description"),
   Speciality:Yup.string().required("Enter Your Speciality"), 
   StartHour:Yup.string().required('Enter Your Start Hour').matches(timeRegExp,'Enter valid time'),
   EndHour:Yup.string().required('Enter Your End Hour').matches(timeRegExp,'Enter valid time'),
})