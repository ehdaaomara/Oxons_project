import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import axios from 'axios';


// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class FemalePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            firstName: "",
            day: "",
            mon: "",
            year: "",
            gov: "",
            city: "",
            id: "",
            email: "",
            phone: ""
        }
    }

    sendData() {
        let data_send = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            day: this.state.day,
            mon: this.state.mon,
            year: this.state.year,
            gov: this.state.gov,
            city: this.state.city,
            id: this.state.id,
            email: this.state.email,
            phone: this.state.phone,


        }

        axios
        .post(
            'http://10.10.10.8/server/Register_baheya.php', data_send
        ).then((res) => {


            if (res.data == 'error') {
                alert("try agine later")
            } else if (res.data == 'email_found') {
                alert("email found ... try agine")
            } else {
               
                    this.props.navigation.navigate("page_12")


            }




        })
}


    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>
                    <ScrollView>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Image
                                source={require("./images/breast-cancer-ribbon.png")}
                                style={{ width: width * 0.8, height: height * 0.22, marginLeft: width * 0.1 }}
                            />

                            {/* <View></View> */}
                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * -0.01 }}>------------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>الاسم</Text> ------------------------------- </Text>

                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    style={{ width: width * 0.4, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 25, padding: 10, textAlign: "right" }}
                                    placeholder={" الاسم الاخير :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ lastName: value })
                                    }}
                                />
                                <TextInput
                                    style={{ width: width * 0.4, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 20, padding: 10, textAlign: "right" }}
                                    placeholder={"  الاسم الاول :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ firstName: value })
                                    }}
                                />
                            </View>

                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * 0.03 }}>--------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>تاريخ الميلاد</Text> --------------------------- </Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    style={{ width: width * 0.25, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 25, padding: 10, textAlign: "right" }}
                                    placeholder={" السنه :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ year: value })
                                    }}
                                />
                                <TextInput
                                    style={{ width: width * 0.25, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 20, padding: 10, textAlign: "right" }}
                                    placeholder={" الشهر :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ mon: value })
                                    }}
                                />

                                <TextInput
                                    style={{ width: width * 0.25, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 20, padding: 10, textAlign: "right" }}
                                    placeholder={" اليوم :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ day: value })
                                    }}
                                />
                            </View>
                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * 0.03 }}>-------------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>العنوان</Text> ---------------------------------- </Text>

                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    style={{ width: width * 0.4, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 25, padding: 10, textAlign: "right" }}
                                    placeholder={" المدينة :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ city: value })
                                    }}
                                />
                                <TextInput
                                    style={{ width: width * 0.4, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, marginLeft: 20, padding: 10, textAlign: "right" }}
                                    placeholder={"  المحافظة :"}
                                    placeholderTextColor={"#9296d5"}
                                    onChangeText={(value) => {
                                        this.setState({ gov: value })
                                    }}
                                />
                            </View>
                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * 0.03 }}>--------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>الرقم القومى</Text> -------------------------- </Text>
                            <TextInput
                                style={{ alignSelf: "center", width: width * 0.85, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, padding: 10, textAlign: "right" }}
                                placeholder={" الرقم القومى  :"}
                                placeholderTextColor={"#9296d5"}
                                onChangeText={(value) => {
                                    this.setState({ id: value })
                                }}
                            />
                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * 0.03 }}>---------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>رقم التليفون</Text> --------------------------- </Text>
                            <TextInput
                                style={{ alignSelf: "center", width: width * 0.85, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, padding: 10, textAlign: "right" }}
                                placeholder={" رقم التليفون  :"}
                                placeholderTextColor={"#9296d5"}
                                onChangeText={(value) => {
                                    this.setState({ phone: value })
                                }}
                            />
                            <Text style={{ color: "#db219c", textAlign: "center", marginTop: height * 0.03 }}>------------------------------- <Text style={{ color: "#2b468b", textAlign: "center", fontSize: 20 }}>الايميل</Text> ------------------------------- </Text>
                            <TextInput
                                style={{ alignSelf: "center", width: width * 0.85, height: height * 0.05, color: "#2b468b", borderRadius: 20, borderWidth: 2, borderColor: "#2b468b", marginTop: 20, padding: 10, marginBottom: height * 0.04 }}
                                placeholder={" الايميل  :"}
                                placeholderTextColor={"#9296d5"}
                                onChangeText={(value) => {
                                    this.setState({ email: value })
                                }}
                            />


                            <TouchableOpacity style={{ alignSelf: "center", height: height * 0.07, width: width * 0.33, backgroundColor: "#db219c", marginBottom: height * 0.04, borderRadius: 30 }}
                             onPress={()=>{
                                // this.props.navigation.navigate("page_12")
                                this.sendData()

                            }}
                            >
                                <Text style={{ color: "#ffff", textAlign: "center", fontSize: 22, fontWeight: "bold", marginTop: height * 0.015 }}>تسجيل</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}