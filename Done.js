import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class FemalePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <View style={{ width: width, height: height, backgroundColor: "#ffff" }}>
                    <View style={{width:width,height:height*0.1,backgroundColor:"#e961b3"}}>
                        <Text style={{fontSize:18,marginRight:width*0.02,color:"#ffff",marginTop:height*0.03}}>حملات الكشف عن السرطان المبكر</Text>
                    </View>
                   <View style={{flexDirection:"row",marginTop:height*0.2}}>
                       <Text style={{fontSize:50,marginLeft:width*0.55,color:"#2b468b"}}>شكرا</Text>
                       <Icon name='check-circle' size={55} style={{marginLeft:5,color:"#e961b3"}} />
                   </View>

                    <Text style={{fontSize:25,marginRight:width*0.07,color:"#2b468b"}}>تم التسجيل بنجاح  </Text>
                    <Text style={{fontSize:25,marginRight:width*0.07,color:"#2b468b"}}>وسيتم الرد فى اقرب وقت</Text>
                    <Text style={{marginTop:height*0.33,marginRight:width*0.05,fontSize:13,color:"#e961b3"}}>التعديل على معلوماتك</Text>
                    <Text style={{marginRight:width*0.05,fontSize:13,color:"#2b468b"}}>مدعوم من <Text style={{color:"#e961b3"}}>Microsofft Forms</Text> | الخصوصية وملفات تعريف الارتباط | تعليمات الاستخدام</Text>

                </View>
            </>
        )
    }
}