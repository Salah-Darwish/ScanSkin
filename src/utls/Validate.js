const ruleValidateMapper={
    isEmail:validateEmail, 
    isPassword: validatePassword, 
    Name:validateName, 
    Phone:validatePhone
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
function validatePhone(phone){
  if (phone.length !== 11) {
    return false;
  }
  return /^(?:\+20)?(?:0)?(?:1[0-2]|2[0-9]|9[0-2]|1[5-9])(?:[0-9]{8})$/.test(phone);
}



export function validate(userInput,rules){
    let isValid=true; 
    for(let rule of rules){
isValid=isValid && ruleValidateMapper[rule.Key](userInput); 
    }
    return isValid; 
}