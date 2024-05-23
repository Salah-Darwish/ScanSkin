const ruleValidateMapper={
    isEmail:validateEmail, 
    isPassword: validatePassword, 
    Name:validateName, 
    // Phone:validatePhone, 
    Experience:validateExper,
    Price:validatePrice, 
    Location:validateLocation, 
    Time:ValidateTime, 
    TimeCom:ValidateTimeCom, 
    Age:ValidateAge,
    Height:ValidateHeight, 
    Weight:ValidateWeight,
    Gender:validateGender, 
    Blood:ValidateBlood
}; 
function validateEmail(enteredEmail){
  const emailRegular=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; 
  return emailRegular.test(enteredEmail);
    }
function validatePassword(enterPassword){
    const passwordRegular=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/; 
    return passwordRegular.test(enterPassword);
}
function validateName(name){
    const nameRegular=/^[a-zA-Z\s'-]+$/; 
    return nameRegular.test(name)
}
// function validatePhone(phone){
//   if (phone.length !== 11) {
//     return false;
//   }
//   return /^(?:\+20)?(?:0)?(?:1[0-2]|2[0-9]|9[0-2]|1[5-9])(?:[0-9]{8})$/.test(phone);
// }
function validateExper(expe){
  const ExperRegular=/^\d{1,2}$/; 
  return ExperRegular.test(expe)
}
function validatePrice(Price){
const priceRegex = /^\d+(\.\d{1,2})?$/;
return priceRegex.test(Price)
}
function validateLocation(Loca){
const locationRegex = /^[A-Za-z\s]+$/;
return locationRegex.test(Loca); 

}
function ValidateTime(Time){
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z?$/;
  return dateTimeRegex.test(Time)
}

function ValidateTimeCom(TimeCom){
  const regex = /\d{2}-\d{2}-\d{4}/;
  return regex.test(TimeCom)
}
function ValidateAge(Age){
const ageRegex = /^(?:1[0-1][0-9]|[1-9][0-9]|[1-9])$/;
return ageRegex.test(Age)
}
function ValidateHeight(Height){
  const heightRegex = /^(?:(?:[4-7])'\d{1,2})$/;
heightRegex.test(Height); 
}
function ValidateWeight(Weight){
  const weightPattern = /^(1\d\d|[2-9]\d|\d\d?)\s?kg$/;
weightPattern.test( Weight)
}

function validateGender(Gender){
  const genderRegex = /^(Male|Female)$/i;
  genderRegex.test(Gender)
}
function ValidateBlood(Blood){
const bloodRegex = /^(A+|A-|B+|B-|O+|O-|AB+|AB-)$/i;
bloodRegex.test(Blood)
}

export function validate(userInput,rules){
    let isValid=true; 
    for(let rule of rules){
isValid=isValid && ruleValidateMapper[rule.Key](userInput); 
    }
    return isValid; 
}