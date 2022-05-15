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
                <View style={{ backgroundColor: "#ffff", width: width, height: height }}>
                    <Video source={require("./images/ehdaa.mp4")}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        onBuffer={this.onBuffer}
                        onError={this.videoError}
                        repeat={true}
                        style={{

                            width: width, height: height * 0.27
                        }} />
                    <Icon name='angle-double-down' size={30} style={{ alignSelf: "center", marginTop: height * 0.02, color: "#db219c" }} />
                    <View style={{ borderBottomWidth: 1.5, borderColor: "#db219c", width: width * 0.6, alignSelf: "center", height: height * 0.063,marginTop:height*-0.01 }}>
                        <Text style={{ textAlign: "center", marginTop: height * 0.02, fontSize: 17, fontWeight: "bold", color: "#2b468b" }}>حملات الكشف عن السرطان المبكر</Text>
                    </View>


                    <View style={{width:width*0.85,height:height*0.5,backgroundColor:"#ffff",alignSelf:"center",marginTop:height*0.03,borderRadius:20}}>
                       <ScrollView >
                       <View style={{  flexWrap: 'wrap', width: "100%", height: "100%" ,alignSelf:'center',flexDirection:"row"}}>



                       <TouchableOpacity style={{height:height*0.2,width:width*0.4,borderRadius:20,marginTop:height*0.02}}
                        onPress={()=>{
                            this.props.navigation.navigate("page_8")
    
                        }}
                       >
                            <Image
                            source={require("./images/breast-cancer-ribbon.png")}
                            style={{height:height*0.2,width:width*0.4,borderRadius:20,marginTop:height*-0.02}}
                            />
                            <Text style={{textAlign:"center",color:"#2b468b",marginTop:height*0.02}}> متابعة دورية </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={{height:height*0.25,width:width*0.4,borderRadius:20,marginTop:height*0.055,marginLeft:width*0.05,alignSelf:"center"}}
                         onPress={()=>{
                            this.props.navigation.navigate("page_10")
    
                        }}
                        >
                            <Image
                            source={require("./images/sugar.jpg")}
                            style={{height:height*0.2,width:width*0.4,borderRadius:20,marginTop:height*-0.02}}
                            />
                            <Text style={{textAlign:"center",color:"#2b468b",marginTop:height*0.01}}>  احمى نفسك من المرض السكرى</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height:height*0.25,width:width*0.4,borderRadius:20,marginTop:height*0.01,alignSelf:"center"}}
                         onPress={()=>{
                            this.props.navigation.navigate("page_9")
    
                        }}
                        >
                            <Image
                            source={require("./images/mother.jpg")}
                            style={{height:height*0.2,width:width*0.4,borderRadius:20,marginTop:height*-0.04}}
                            />
                            <Text style={{textAlign:"center",color:"#2b468b"}}>احمى نفسك وطفلك من السرطان</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height:height*0.25,width:width*0.4,borderRadius:20,marginLeft:width*0.05,marginTop:height*0.01,alignSelf:"center"}}
                         onPress={()=>{
                            this.props.navigation.navigate("page_11")
    
                        }}
                        >
                            <Image
                            source={require("./images/downloa.jpg")}
                            style={{height:height*0.2,width:width*0.4,borderRadius:20,marginRight:width*0.1,marginTop:height*-0.04}}
                            />
                            <Text style={{textAlign:"center",color:"#2b468b"}}> كن متطوع  </Text>

                        </TouchableOpacity>


                       


                       
                        

                        </View>
                        </ScrollView>
                    </View>
                </View>
            </>
        )
    }
}