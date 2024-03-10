import {StyleSheet, Text, View, TextInput,TouchableOpacity,Image} from 'react-native'
import React ,{useEffect,useState,useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {scale} from 'react-native-size-matters'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  
  const CELL_COUNT = 4;
const Verfiy = () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

return(
    <View style={styles.container}>
        <View style={styles.header}>
       <TouchableOpacity style={styles.buttIcon}>
       <Icon name='angle-left' size={20} color='#684428'/>
       </TouchableOpacity>
       <Text style={{fontSize:scale(23),fontWeight:'400',color:'#7A441A',marginHorizontal:scale(55)}}>verification code</Text>
      </View>
      <View style={{width:scale(150),height:scale(150),borderRadius:scale(75),backgroundColor:'#C7916D',marginTop:scale(55),alignItems:'center',justifyContent:'center'}}>
        <Icon name='check' size={55} color='#FFF' />
      </View>
      <View style={{width:'100%',height:scale(50),alignItems:'center',justifyContent:'center',marginTop:scale(70)}}>
     <Text style={{fontSize:scale(18),color:'#8D5524E2',marginHorizontal:scale(20)}}>Enter verification code send  to you via e-mail </Text>
     </View>

     <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />

     <TouchableOpacity style={{width:scale(260),height:scale(55),borderRadius:scale(10),marginTop:scale(130),backgroundColor:'#C7916D',alignItems:'center',justifyContent:'center',alignSelf:'center'}}
  
      >
          <Text style={{fontSize:scale(25),color:'#FFFFFF'}}>Verfiy</Text>
        </TouchableOpacity>
      </View>
)
}
export default Verfiy;
const styles = StyleSheet.create({
  container:{flex:scale(1),justifyContent:'space-between',backgroundColor:'#FEFDF5',paddingVertical:scale(15),marginHorizontal:scale(20),alignItems:'center'},
  header:{width:'100%',height:scale(50),flexDirection:'row',alignItems:'center',marginHorizontal:scale(15)},
  buttIcon:{width:scale(30),height:scale(30),borderRadius:15,backgroundColor:'#FEFDF5',alignItems:'center',justifyContent:'center', shadowColor: '#C7916D',
  shadowOpacity: scale(0.9),
  elevation: scale(6),
  borderRadius: scale(30),
  shadowRadius: scale(5),
  shadowOffset: { width: scale(56), height: scale(13) },},
  root: {flex: scale(1), padding: scale(20)},
  title: {textAlign: 'center', fontSize: scale(30)},
  codeFieldRoot: {marginTop: scale(65)},
  cell: {
    width: scale(60),
    height: scale(60),
    lineHeight: scale(38),
    fontSize: scale(24),
    borderWidth: scale(1.5),
    textAlign: 'center',
    marginLeft:scale(8),
    marginRight:scale(8),
    borderColor:'#E0C1A3',
    borderRadius:scale(5)
  },
  focusCell: {
    borderColor: '#ccc',
  },
});

