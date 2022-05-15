import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import PDFView from 'react-native-view-pdf';
import DocumentPicker from 'react-native-document-picker';



// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pass: '',
            email: '',
            specialization: '',
            select: "",
            sec: true,
            option: "",
            degree: "",
            summery_name: '',
            path: '',
            loading: false,
            file: null,
        }
    }


    sendData() {
        let data_send = {
            email: this.state.email,
            pass: this.state.pass,
            name: this.state.name,
            special: this.state.select,
        }

        axios
            .post(
                'http://10.10.10.8/server/User_signup.php', data_send
            ).then((res) => {
                if (res.data == 'error') {
                    alert("try agine later")
                } else if (res.data == 'email_found') {
                    alert("email found ... try agine")
                } else {
                    if (this.state.select == "Brain") {
                        this.props.navigation.navigate("page_2")
                    } else if (this.state.select == "Uterine") {
                        this.props.navigation.navigate("page_3")
                    } else if (this.state.select == "Breast") {
                        this.props.navigation.navigate("page_4")
                    } else if (this.state.select == "Cardio") {
                        this.props.navigation.navigate("page_5")

                    } else if (this.state.select == "Liver") {
                        this.props.navigation.navigate("page_15")
                    }
                }

            })
    }


    showselect = (option) => {
        if (option !== "disabled") {
            // alert(option)
            this.setState({ select: option })

        }
    }

    change() {
        let sec = this.state.sec
        this.setState({ sec: !sec })
    }




    componentDidMount() {

    }

    uploadFile = async () => {
        //Check if any file is selected or not
        this.setState({ loading: true })
        let singleFile = this.state.file;
        if (singleFile != null) {
            //If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            data.append('summery_name', this.state.summery_name);
            data.append('generation_id', this.state.generation_id);
            //Please change file upload URL
            let res = await fetch(
                basic.url + 'admin/upload_file.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            let responseJson = await res.json();
            if (responseJson == "success") {
                Alert.alert(
                    'أدمن',
                    'تم رفع الملخص بنجاح'
                )
                this.props.navigation.goBack()
            } else if (responseJson == "Sorry, your file is too large.") {
                Alert.alert(
                    'أدمن',
                    'حجم هذا الملخص كبير لرفعه'
                )
            } else if (responseJson == "Sorry, file already exists.") {
                Alert.alert(
                    'أدمن',
                    'هذا الملخص موجود بالفعل'
                )
            } else {
                Alert.alert(
                    'أدمن',
                    'عفوا حدث خطأ أثناء رفع الملخص'
                )
            }
        } else {
            //if no file selected the show alert
            Alert.alert(
                'أدمن',
                'عفوا يجب اختيار ملخص اولا'
            )
        }
        this.setState({ loading: false })
    };


    selectOneFile = async () => {
        //Opening Document Picker for selection of one file
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            //Printing the log realted to the file
            this.setState({
                summery_name: res.name,
                path: res.uri,
                file: res,
            })

        } catch (err) {

        }
    };




    render() {
        return (
            <>
                <View style={{ flex:1, backgroundColor: "#ffff" }}>
<ScrollView>

                    <View>


                        <Image
                            source={require("./images/intro.png")}
                            style={{ width: width, height: height * 0.3, marginTop: height * -0.06 }}
                        />

                        <Text style={{ color: "#2b468b", textAlign: 'center', fontSize: 30, fontWeight: "bold", marginTop: height * -0.03 }}>SignUp as a doctor </Text>

                        <TextInput style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.03, borderColor: "#2b468b", padding: 20, fontSize: 15, color: "#2b468b" }}
                            placeholder={"Doctor's Name :"}
                            placeholderTextColor={"#9296d5"}
                            onChangeText={(value) => {
                                this.setState({ name: value })
                            }}
                        />
                        <TextInput style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.035, borderColor: "#2b468b", padding: 20, fontSize: 15, color: "#2b468b" }}
                            placeholder={"E-mail :"}
                            placeholderTextColor={"#9296d5"}
                            onChangeText={(value) => {
                                this.setState({ email: value })
                            }}
                        />
                        <View style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.035, borderColor: "#2b468b", flexDirection: "row" }}>
                            <TextInput style={{ padding: 15, fontSize: 15, color: "#2b468b", height: height * 0.07, width: width * 0.8 }}
                                placeholder={"Password :"}
                                placeholderTextColor={"#9296d5"}
                                secureTextEntry={this.state.sec}
                                value={this.state.pass}
                                onChangeText={(value) => {
                                    this.setState({ pass: value })
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    this.change()
                                }}>
                                <Icon name={this.state.sec ? "eye-slash" : "eye"} size={13} style={{ marginTop: 20, color: "#2b468b" }}
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.035, borderColor: "#2b468b", padding: 2, fontSize: 15, color: "#ffff", color: "#2b468b" }}>
                            <Picker style={{ color: "#9296d5" }}
                                onValueChange={this.showselect}
                                selectedValue={this.state.select}
                            >
                                <Picker.Item label='Select your specialization :' value='disabled' color={"#9296d5"} backgroundColor={"#ffff"} />
                                <Picker.Item label='Breast' value='Breast' color={"#ffff"} />
                                <Picker.Item label='Uterine' value='Uterine' color={"#ffff"} />
                                <Picker.Item label='Liver' value='Liver' color={"#ffff"} />
                                <Picker.Item label='Brain' value='Brain' color={"#ffff"} />
                                <Picker.Item label='Cardio' value='Cardio' color={"#ffff"} />


                            </Picker>
                        </View>

                        <View style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.035, borderColor: "#2b468b", flexDirection: "row" }}>
                            <TextInput style={{ padding: 15, fontSize: 15, color: "#2b468b", height: height * 0.07, width: width * 0.76 }}
                                placeholder={"Enter your certificate :"}
                                placeholderTextColor={"#9296d5"}
                                multiline={true}
                                    onChangeText={text => {
                                        this.setState({ summery_name: text })
                                    }}
                                    value={this.state.summery_name}
                            />
                            <View>

                            <TouchableOpacity
                                disabled={this.state.disabled}
                                onPress={() => {
                                    this.selectOneFile()
                                }}
                                style={{
                                    width: width*0.09,
                                    height:height*0.042,
                                    backgroundColor:"#2b468b",
                                    justifyContent: 'center',
                                    marginTop: 8,
                                    
                                    borderRadius:30
                                    
                                }}>

                                <Text
                                    style={{
                                        fontSize: 24,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        color: '#FFF',
                                        marginTop:-2

                                    }}>
                                    {this.state.path.trim() == "" ? "+" : '+'}

                                </Text>
                            </TouchableOpacity>

                               
                            </View>

                        </View>







                        <TouchableOpacity style={{ height: height * 0.08, width: width * 0.18, alignSelf: 'center', backgroundColor: "#ed7d2b", marginTop: height * 0.03, borderRadius: 40, marginBottom: height * 0.02 }}

                            onPress={() => {


                                this.sendData()

                            }}
                        >
                            <Icon name='angle-right' style={{ textAlign: 'center', marginTop: height * 0.018, color: "#ffff" }} size={35} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: height * 0.01, width: width * 0.4, height: height * 0.055, borderWidth: 1, borderColor: "#2b468b", alignSelf: "center", borderRadius: 30,marginBottom:height*0.03 }}
                            onPress={() => {

                                this.props.navigation.navigate("page_13")


                            }}
                        >
                            <Text style={{ color: "#2b468b", textAlign: 'center', fontSize: 25, fontWeight: "bold", marginTop: height * 0.007 }}>LOGIN</Text>
                        </TouchableOpacity>


                    </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}