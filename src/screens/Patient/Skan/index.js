// import * as React from 'react'
// import {  Text, View, StyleSheet,Image, TouchableOpacity, Dimensions, Alert } from 'react-native'
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
// import { colors } from "../../../utls/colors";
// import {scale} from 'react-native-size-matters';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import ImagePicker from 'react-native-image-crop-picker';
// import { useDispatch,useSelector } from 'react-redux';
// import { Scan } from '../../../redux/actions';
// import axios from 'axios'
// import { useUpadateEffect } from '../../../utls/useUpdateEffect';
// export default function HomeScreen({navigation}) {
//      const [type, setType] = React.useState("")
//      const [check, setCheck] = React.useState(false)
//      const [imageUri,setImageUri]=React.useState(null)
//      const [imageInformation,setImageInformation]=React.useState(null)
//      const [fileName,SetFileName]=React.useState('')
//       const dispatch=useDispatch()
//       const success =useSelector(state=>state.homePatient.ScanSuccess)
//       const failure =useSelector(state=>state.homePatient.ScanFailure)
//       const formData = new FormData();
      
//       formData.append('Illness_Pucture'),{
//       uri:imageUri,
//       name:fileName,
//       type:imageInformation
//         };
    
//   const CheckType=(check)=>{
//     if(check==false){
//       setType("back")
//       setCheck(true)
//     }else{
//       setType("front")
//       setCheck(false)
//     }

//   } 

//   useUpadateEffect(()=>{
//     navigation.navigate('DiscoverDiseasesScreen')
//   },[success])


//     const handleBarCodeScanned =()=>{
//     dispatch(Scan(formData))     
//     }
    

//     return (
//         <>
//             <View style={styles.contanier}>
//                 <QRCodeScanner
                  
//                     onRead={ handleBarCodeScanned } 
//                    cameraType={type}
                    
//                     cameraContainerStyle={styles.scan}
//                     // flashMode={RNCamera.Constants.FlashMode.torch}
//                     reactivate={true}
//                     showMarker={true}
//                     markerStyle={{borderColor:colors.Actdot,borderWidth:scale(3),borderRadius:scale(30),borderStyle:'dashed'}}
//                     reactivateTimeout={500}
//                     topContent={
//                         <View style={styles.heading}>
                

//            <TouchableOpacity style={styles.arrow}>
//             <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
//             </TouchableOpacity>


//                         </View>
//                     }
//                     bottomContent={
//                       <View style={styles.bottom}>
//                         <TouchableOpacity
//                         onPress={()=>{
//                           ImagePicker.openPicker({
//                             width: 300,
//                             height: 400,
//                             cropping: true
//                           }).then(image => {
//                             setImageUri(image.path);  // Correctly access the image path
                                 
//                            SetFileName(image.filename);
//                             setImageInformation(image.mime);  // Store the entire image object if needed
//                             handleBarCodeScanned();  // Call your barcode scanned handler
//                           }).catch(error => {
//                             console.error("ImagePicker error: ", error);
//                           });
//                         }}
                       
//                         >
//                           <Image source={require('../../../assets/image-gallery.png')} resizeMode='contain' style={{width:scale(70), height:scale(50)}}/>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                         onPress={()=>{
//                           handleBarCodeScanned()
//                         }}
//                         >
//                           <FontAwesome name='circle' size={50} color='#684428'/>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                         onPress={()=>{
//                        CheckType(check)
//                         }}
//                         >
//                           <Image source={require('../../../assets/rotate.png')} resizeMode='contain' style={{width:scale(70), height:scale(50)}}/>
//                         </TouchableOpacity>
//                       </View>

//                     }
//                 />

//             </View>
//         </>
//     )
// }
// const styles = StyleSheet.create({
//     contanier: {
//         backgroundColor: colors.backgr,
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     Text: {
//         color: '#F00',
//         fontSize: scale(12),
//     },
//     heading: {
//         width: '90%',
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom:scale(70)
//     },
//     scan :{width:'100%',
//     height:'65%',

//   },
  
//       arrow: {
//     width:scale(30),
//     height:scale(30),
//     borderRadius:scale(15),
//     backgroundColor:colors.backgr,
//     alignItems:'center',
//     justifyContent:'center',
//     shadowColor: colors.notAct,
//      shadowOpacity: scale(0.9),
//     elevation: scale(6),
//     borderRadius: scale(15),
//      shadowRadius: scale(8),
//      shadowOffset: { width: scale(56), height: scale(13) },
       
//   },
//   bottom :{
//     width:'100%',
//     marginBottom:scale(90),
//     paddingHorizontal:scale(18),
//     backgroundColor:colors.backgr,
//     alignItems:'center',
//     flexDirection:'row',
//     justifyContent:'space-between'
//   }
// })


// const [image,setImage]=useState(null)
//   const[filename,setFileName]=useState(null)
//   const sendpic=async ()=>{
//     await ImagePicker.openCamera({
//       mediaType:'photo',
//       width: 300,
//       height: 400,
//       cropping: false,
//     }).then(image => {
//       setImage(image['path']);
//     const paths=image['path']
   
//     const filename=paths.substring(paths.lastIndexOf('/')+1);
//     setFileName(filename);
//   console.log(filename)
//     console.log(image)
//     const data=new FormData();
//     data.append('image',filename)
//     data.append('title','3aslemajiti')

//     const headers={
//       Accept:'application/json',
//       'Content-Type':'multipart/form-data',
//     }
//     try{
//       const response= axios.post('http://192.168.1.19:8000/Sends/',data,{headers:headers})
//       alert('yess!!!!!');
//     } 
//     catch (error) {
//       // handle error
//       alert(error.message);
//     }
//   });
//   };



import * as React from 'react'
import {  Text, View, StyleSheet,Image, TouchableOpacity, Dimensions, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { colors } from "../../../utls/colors";
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
export default function HomeScreen({navigation}) {
     const [type, setType] = React.useState("")
     const [check, setCheck] = React.useState(false)
     const [imageUri,setImageUri]=React.useState(null)
     const [imageInformation,setImageInformation]=React.useState(null)
     const [fileName,SetFileName]=React.useState('')
  const CheckType=(check)=>{
    if(check==false){
      setType("back")
      setCheck(true)
    }else{
      setType("front")
      setCheck(false)
    }

  } 
//   const handleBarCodeScanned=()=>{
//   const formdata=new FormData()   
//   formdata.append('Illness_Pucture',{
//     uri:'http://skanskinapp.runasp.net/swagger/index.html/api/Patient/RespondingToillness',
//     name:imageInformation.fileName,
//     type:Illness_Pucture.string
    
//   })

// }
  
    // const handleBarCodeScanned = () => {
    //   const formData = new FormData();
    //   formData.append('Illness_Pucture',{
    //     name:fileName,
    //     uri:imageUri,
    //     type:imageInformation,
    //   });
  
    //   fetch('http://skanskinapp.runasp.net/swagger/index.html/api/Patient/RespondingToillness', {
    //     method: 'POST',
    //     body: formData,
    //     headers:'multipart/form-data',
    //   })
    //     .then(response => 
    //        console.log(response.data),
    //       navigation.navigate('DiscoverDiseasesScreen'))
    //     .catch(error => navigation.navigate('NotDiscoverDiseasesScreen'));
    // };

    const handleBarCodeScanned = () => {
      const formData = new FormData();
      formData.append('Illness_Pucture', {
       name: Illness_Pucture.filename , // Ensure you have a filename
        uri: Illness_Pucture.uri,
        type: Illness_Pucture.type
      });
    
      fetch('http://skanskinapp.runasp.net/api/Patient/RespondingToillness', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json(); // Parse JSON response
          } else {
            throw new Error('Response not ok');
          }
        })
        .then(data => {
          console.log(data);
          navigation.navigate('DiscoverDiseasesScreen');
        })
        .catch(error => {
          console.error('Request error: ', error);
          navigation.navigate('NotDiscoverDiseasesScreen');
        });
    };

    // const handleBarCodeScanned =()=>{
    //   axios.post('http://skanskinapp.runasp.net/swagger/index.html/api/Patient/RespondingToillness',FormData,{
    //     headers:{
    //       'Content-Type' :'multipart/form-data'
    //     }
    //   }).then(res=>{
    //     if(res.status===200){
    //       navigation.navigate('DiscoverDiseasesScreen')
    //     }else{
    //       navigation.navigate('NotDiscoverDiseasesScreen')
    //     }

    //   })
    // }
    

    return (
        <>
            <View style={styles.contanier}>
                <QRCodeScanner
                  
                    onRead={ handleBarCodeScanned } 
                   cameraType={type}
                    
                    cameraContainerStyle={styles.scan}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    showMarker={true}
                    markerStyle={{borderColor:colors.Actdot,borderWidth:scale(3),borderRadius:scale(30),borderStyle:'dashed'}}
                    reactivateTimeout={500}
                    topContent={
                        <View style={styles.heading}>
                

           <TouchableOpacity style={styles.arrow}>
            <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
            </TouchableOpacity>


                        </View>
                    }
                    bottomContent={
                      <View style={styles.bottom}>
                        <TouchableOpacity
                        onPress={()=>{
                          ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true
                          }).then(image => {
                            setImageInformation(image.mime)
                            setImageUri(image.path)
                            SetFileName(image.filename);
                           handleBarCodeScanned()
                          });
                        }}
                       
                        >
                          <Image source={require('../../../assets/image-gallery.png')} resizeMode='contain' style={{width:scale(70), height:scale(50)}}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                          handleBarCodeScanned()
                        }}
                        >
                          <FontAwesome name='circle' size={50} color='#684428'/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                       CheckType(check)
                        }}
                        >
                          <Image source={require('../../../assets/rotate.png')} resizeMode='contain' style={{width:scale(70), height:scale(50)}}/>
                        </TouchableOpacity>
                      </View>

                    }
                />

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    contanier: {
        backgroundColor: colors.backgr,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    Text: {
        color: '#F00',
        fontSize: scale(12),
    },
    heading: {
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:scale(70)
    },
    scan :{width:'100%',
    height:'65%',

  },
  
      arrow: {
    width:scale(30),
    height:scale(30),
    borderRadius:scale(15),
    backgroundColor:colors.backgr,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: colors.notAct,
     shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(15),
     shadowRadius: scale(8),
     shadowOffset: { width: scale(56), height: scale(13) },
       
  },
  bottom :{
    width:'100%',
    marginBottom:scale(90),
    paddingHorizontal:scale(18),
    backgroundColor:colors.backgr,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})