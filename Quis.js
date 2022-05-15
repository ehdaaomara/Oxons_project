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
                <View style={{ width: width, height: height, backgroundColor: "#f7e4ea" }}>
                    <Image 
                     source={require("./images/received_706683167195443.gif")}
                     style={{height:height*0.3,width:width*0.6,marginTop:height*0.03,alignSelf:"center"}}
                      />
                    <Text style={{ fontSize: 35, color: "#2b468b", fontWeight: "bold", textAlign: "center",marginTop:height*0.02 }}>Are you ... ?</Text>
                   
                    <TouchableOpacity style={{ height: height * 0.07, width: width * 0.8, borderWidth: 2, borderColor: "#2b468b", borderRadius: 30, alignSelf: "center", marginTop: height * 0.05 }}
                    onPress={()=>{
                        this.props.navigation.navigate("page_7")

                    }}
                    >
                        <Text style={{ fontSize: 25, color: "#2b468b", textAlign: "center", marginTop: height * 0.01 }}>Female user</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: height * 0.07, width: width * 0.8, borderWidth: 2, borderColor: "#2b468b", borderRadius: 30, alignSelf: "center", marginTop: height * 0.04 }}
                     onPress={()=>{
                        this.props.navigation.navigate("page_1")

                    }}
                    >
                        <Text style={{ fontSize: 25, color: "#2b468b", textAlign: "center", marginTop: height * 0.01 }}>Doctor </Text>
                    </TouchableOpacity>

                    
                    <View style={{flexDirection:"row",alignSelf:"center",marginTop:height*0.1}}>
                    <TouchableOpacity style={{ width: width * 0.1, height: height * 0.05, alignSelf: "center", borderRadius: 20 }}>
                        <Icon name='instagram' size={30} style={{color: "#2b468b"}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: width * 0.1, height: height * 0.05, alignSelf: "center", borderRadius: 20,marginLeft:width*0.04 }}>
                    <Icon name='twitter' size={30} style={{color: "#2b468b"}}/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: width * 0.1, height: height * 0.05, alignSelf: "center", borderRadius: 20,marginLeft:width*0.04 }}>
                        <Icon name='facebook' size={30} style={{color: "#2b468b"}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: width * 0.1, height: height * 0.05, alignSelf: "center", borderRadius: 20 ,marginLeft:width*0.04}}>
                        <Icon name='snapchat' size={30} style={{color: "#2b468b"}}/>
                    </TouchableOpacity>
                    </View>

                </View>
            </>
        )
    }
}