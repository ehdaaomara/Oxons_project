import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

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
        }
    }
    

    sendData() {
        let data_send = {
            email: this.state.email,
            pass: this.state.pass
        }

        axios
            .post(
                'http://10.10.10.8/server/User_login.php', data_send
            ).then((res) => {
                console.log(res.data)
                if (res.data == 'error') {
                   alert("try agine later")
                } else if (res.data == 'user_not_found') {
                    alert("user_not_found ... try agine")
                }else{
                    if (res.data.SignUp_special == "Brain") {
                        this.props.navigation.navigate("page_2")
                    } else if (res.data.SignUp_special == "Uterine") {
                        this.props.navigation.navigate("page_3")
                    } else if (res.data.SignUp_special == "Breast") {
                        this.props.navigation.navigate("page_4")
                    } else if (res.data.SignUp_special == "Cardio") {
                        this.props.navigation.navigate("page_5")

                    } else if (res.data.SignUp_special== "Liver") {
                        this.props.navigation.navigate("page_15")
                    }
                }

            })
    }

    change() {
        let sec = this.state.sec
        this.setState({ sec: !sec })
    }

    render() {
        return (
            <>
                <View style={{ width: width, height: height, backgroundColor: "#ffff" }}>
                    {/* <View style={{ width: width, height: height * 0.655, backgroundColor: "#2b468b" }}> */}
                    <Image
                        source={require("./images/intro.png")}
                        style={{ width: width, height: height * 0.3, position: 'absolute', marginTop: height * -0.03 }}
                    />

                    <Text style={{ color: "#2b468b", textAlign: 'center', marginTop: height * 0.014, fontSize: 30, fontWeight: "bold", marginTop: height * 0.24 }}>LOGIN</Text>


                    <TextInput style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.029, borderColor: "#2b468b", padding: 20, fontSize: 15, color: "#2b468b" }}
                        placeholder={"E-mail :"}
                        placeholderTextColor={"#9296d5"}
                        onChangeText={(value) => {
                            this.setState({ email: value })
                        }}
                    />
                    <View style={{ height: height * 0.07, alignSelf: 'center', width: width * 0.9, borderWidth: 2, borderRadius: 30, marginTop: height * 0.03, borderColor: "#2b468b", flexDirection: "row" }}>
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
                            <Icon name={this.state.sec ? "eye-slash" : "eye"} size={13} style={{ marginTop: 20, color: "#9296d5" }}
                            />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={{ height: height * 0.08, width: width * 0.18, alignSelf: 'center', backgroundColor: "#ed7d2b", marginTop: height * 0.05, borderRadius: 40 }}
                        onPress={() => {
                            // this.props.navigation.navigate("page_1")
                            this.sendData()
                        }}
                    >
                        <Icon name='angle-right' style={{ textAlign: 'center', marginTop: height * 0.018, color: "#ffff" }} size={35} />
                    </TouchableOpacity>

                    {/* </View> */}

                    <TouchableOpacity style={{ marginTop: height * 0.1, width: width * 0.4, height: height * 0.055, borderWidth: 1, borderColor: "#2b468b", alignSelf: "center", borderRadius: 30 }}
                        onPress={() => {
                            this.props.navigation.navigate("page_1")
                            // this.sendData()
                        }}
                    >
                        <Text style={{ color: "#2b468b", textAlign: 'center', fontSize: 25, fontWeight: "bold", marginTop: height * 0.007 }}>SIGN UP</Text>
                    </TouchableOpacity>



                </View>
            </>
        )
    }
}