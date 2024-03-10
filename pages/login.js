import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ImageBackground } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { scale } from 'react-native-size-matters'
// const AuthContext = React.createContext();

const Login = ({ navigation }) => {
  // const {logIn} = useContext(AuthContext);
  const [errorPass, setErrorPass] = useState('#fff');
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [true_email, setTrueEmail] = useState(true);
  const [true_pass, setTruePass] = useState(true);



  const check_login = () => {
    if (isValidEmail(email)) {
      if (isValidpassword(password)) {
        // LogIn();
        // console.log('true')
        // navigation.navigate('home_screen')

      } else {
        setErrorPass('#f00');
        setTruePass(false);
      }
    } else {
      setTrueEmail(false);
    }
  }


  const isValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidpassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  return (
    <View style={{ flex: scale(1), alignItems: 'center',justifyContent:'center' }}>
       <ImageBackground source={require('../src/assets/background.jpeg')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}
          >
            <Icon name='angle-left' size={20} color='#684428' />
          </TouchableOpacity>
          <Text style={{ fontSize: scale(25), fontWeight: '400', color: '#FFFFFF', marginHorizontal: scale(55) }}>Welcome Back !</Text>
        </View>
        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#FFFFFF', marginTop: scale(6), marginLeft: scale(15) }}>Login to your account</Text>
      </View>
      <TextInput style={styles.emailInput}
        placeholder='E-mail'
        placeholderTextColor={'#8D5524E2'}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <View style={styles.passView}>
        <TextInput style={{ width: '88.5%', height: scale(55) }}
          placeholder='Password'
          placeholderTextColor={'#8D5524E2'}
          secureTextEntry={show}
          value={password}
          onChangeText={value => {
            setPassword(value);
            setTruePass(true);
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            setShow(!show);
          }}
        >
          <Icon
            name={show ? 'eye-slash' : 'eye'}
            size={18}
            color='#8D5524E2'
          />
        </TouchableOpacity>
      </View>

      <View
        style={styles.ViewValid}>
        {true_email == false ? (
          <View style={{ width: '80%', height: scale(30),marginRight:scale(48) }}>
            <Text
              style={{
                color:
                  true_email == false || true_pass == false
                    ? '#F00'
                    : '#FFF',
                fontSize: scale(10),
              }}>
              Please enter valid email and password
            </Text>
          </View>
        ) : null}
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Forgetpass_Screen');
        }}
        style={styles.frogetPassButton}
      >
        <Text
          style={{
            color: '#F00',

          }}>
          Forget password?
        </Text>
      </TouchableOpacity>


      <View style={styles.viewOR}>
        <Text style={{ fontSize: scale(18), textAlign: 'center', color: '#AE7D59' }}>──────────  OR  ──────────</Text>
      </View>
      <View style={styles.faceAndGoogle}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../src/assets/facebook.png')} resizeMode='contain' style={{ width: scale(45), height: scale(45) }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../src/assets/google.png')} resizeMode='contain' style={{ width: scale(45), height: scale(45) }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.LogIn}
        onPress={() => {
          check_login();
        }}
      >
        <Text style={{ fontSize: scale(25), color: '#FFFFFF' }}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.ViewSign}>
        <Text style={{ fontSize: scale(17), color: '#AE7D59' }}>Don't have an account ?</Text>
        <TouchableOpacity
        //  onPress={() => {
        //   navigation.navigate('Sign_Screen');
        // }}
        >
          <Text style={{ fontSize: scale(15), color: '#F00' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: { width: '100%',  paddingVertical: scale(30),marginBottom:scale(120) },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  header: { width: '100%', height: scale(30), flexDirection: 'row',alignItems: 'center', marginHorizontal: scale(15) },
  headerButton: {
    width: scale(30), height: scale(30), borderRadius: scale(15), backgroundColor: '#FEFDF5', alignItems: 'center', justifyContent: 'center', shadowColor: '#C7916D',
    shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(30),
    shadowRadius: scale(5),
    shadowOffset: { width: scale(56), height: scale(13) },
  },
  emailInput: { width: scale(310),height: scale(55), borderWidth: scale(1), borderColor: '#E0C1A3',marginBottom:scale(20), borderRadius: scale(10), paddingHorizontal: scale(15) },
  passView: { width: scale(310), height: scale(55), borderWidth: scale(1), borderColor: '#E0C1A3', borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: scale(10) },
  ViewValid: {
    width: '100%',
    height: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(25),
    alignItems: 'center',
    alignItems: 'center',
  },
  frogetPassButton: { width: scale(155), height: scale(30),marginRight:scale(45), alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', marginTop: scale(-38) },
  viewOR: { width: "100%", height: scale(50), alignItems: 'center', justifyContent: 'center', marginTop: scale(20) },
 faceAndGoogle:{ width: '100%', height: scale(100), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center', marginHorizontal: scale(50) ,marginRight:scale(95)},
button:{ width: scale(70), height: scale(70), backgroundColor: '#F8ECDE', borderRadius: scale(10), alignItems: 'center', justifyContent: 'center' },
LogIn:{ width: scale(250), height: scale(55), borderRadius: scale(10), marginTop: scale(15), backgroundColor: '#C7916D', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
ViewSign:{ width: '100%', height: scale(50), marginRight:scale(55),flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }
});
