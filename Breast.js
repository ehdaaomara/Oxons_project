import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from "react-native-actions-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class Cardiologist extends React.Component {
    constructor(props) {
        super(props)
        this.actionSheetRef = React.createRef()

        this.state = {
            photo_uri: '',
            show: true
        }
    }

    componentDidMount() {
        this.requestCameraPermission()
    }


    //the requestCameraPermission method for ask the permissions:

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool photo App Camera Permission",
                    message: "Cool photo App needs access to your camera" + "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "Ok"


                });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission danied");
            }
        } catch (err) {
            console.warn(err);
        }
    };



    //function launchCamera for open camera and takeimages:

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
            //   console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri
                });
            }
        });

    }







    //function selectFromGallery to select image from gallery:

    selectFromGallery = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            //   console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri,
                });
            }
        });

    }


    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>
                    <ScrollView>
                        <View style={{ height: height * 0.07, width: width * 0.6, backgroundColor: "#2b468b", alignSelf: "center", marginTop: height * 0.04, borderRadius: 30 }}>
                            <Text style={{ color: "#ffff", textAlign: 'center', fontWeight: "bold", fontSize: 20, marginTop: height * 0.015 }}>Breast</Text>
                        </View>

                        <View style={{ width: width * 0.85, height: height * 0.5, backgroundColor: "#bfbfbf", alignSelf: "center", marginTop: height * 0.04, borderRadius: 15, borderBottomLeftRadius: 0 }}>
                            {this.state.photo_uri == '' ? (
                                <Image

                                    source={require("./images/default.jpg")}
                                    style={{ height: height * 0.4, width: width * 0.7, alignSelf: "center", marginTop: height * 0.07, borderBottomLeftRadius: 0 }}
                                />
                            ) : (
                                <Image
                                    source={{ uri: this.state.photo_uri }}
                                    style={{ height: height * 0.5, width: width * 0.85, alignSelf: 'center', borderRadius: 15, borderBottomLeftRadius: 0 }}
                                />
                            )}
                        </View>
                        <TouchableOpacity style={{ height: height * 0.05, width: width * 0.5, borderRadius: 30, backgroundColor: "#ed7d2b", marginLeft: width * 0.08, marginTop: height * 0.01, borderTopLeftRadius: 0 }}
                            onPress={() => {
                                this.actionSheetRef.current?.setModalVisible()
                            }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, color: "#ffff", marginTop: height * 0.012 }}>Upload Photo...</Text>
                        </TouchableOpacity>




                        {/* <View>
                            {this.state.photo_uri == '' ? (
                                <View></View>
                            ) : (
                                <View> */}



                        {/* <Text style={{ color: "#ed7d2b", textAlign: "center", marginTop: height * 0.03, marginBottom: height * 0.02 }}>--------------------------------------------------------------------------</Text>
                                    <View style={{ height: height * 0.05, width: width * 0.5, borderRadius: 30, backgroundColor: "#ed7d2b", marginLeft: width * 0.08, marginTop: height * 0.01, borderBottomLeftRadius: 0, marginBottom: height * 0.01 }}>
                                        <Text style={{ textAlign: "center", fontSize: 15, color: "#ffff", marginTop: height * 0.012 }}>Result...</Text>

                                    </View>


                                    <Image
                                        source={require("./images/breast.png")}
                                        style={{ height: height * 0.5, width: width * 0.85, alignSelf: 'center', borderRadius: 15, marginBottom: height * 0.03 }}
                                    /> */}




                        {this.state.photo_uri == '' ? (
                            <View></View>
                        ) : (
                            <>
                                <TouchableOpacity style={{ height: height * 0.05, width: width * 0.5, borderRadius: 30, backgroundColor: "#ed7d2b", marginLeft: width * 0.08, marginTop: height * 0.01, borderTopLeftRadius: 0 }}
                                    onPress={() => {
                                        this.setState({ show: false })

                                    }}

                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, color: "#ffff", marginTop: height * 0.012 }}>Show the result</Text>

                                </TouchableOpacity>





                                {this.state.show == true ? (
                                    <>
                                    </>
                                ) :
                                    <View >
                                        <Text style={{ color: "#ed7d2b", textAlign: "center", marginTop: height * 0.03, marginBottom: height * 0.02 }}>--------------------------------------------------------------------------</Text>
                                        <View style={{ height: height * 0.05, width: width * 0.5, borderRadius: 30, backgroundColor: "#ed7d2b", marginLeft: width * 0.08, marginTop: height * 0.01, borderBottomLeftRadius: 0, marginBottom: height * 0.01 }}>
                                            <Text style={{ textAlign: "center", fontSize: 15, color: "#ffff", marginTop: height * 0.012 }}>Result...</Text>

                                        </View>


                                        <Image
                                            source={require("./images/breast.png")}
                                            style={{ height: height * 0.5, width: width * 0.85, alignSelf: 'center', borderRadius: 15, marginBottom: height * 0.03 }}
                                        />
                                    </View>
                                }




                            </>
                            // )}


                        )}










                        <ActionSheet ref={this.actionSheetRef}  >

                            <View style={{ flexDirection: "row", marginTop: height * 0.05 }}>
                                <TouchableOpacity style={{ height: height * 0.08, width: width * 0.19, backgroundColor: "#ed7d2b", marginLeft: width * 0.22, borderRadius: 20 }}
                                    onPress={() => {
                                        this.selectFromGallery()
                                    }}
                                >
                                    <Icon name={"images"} size={25} style={{ color: "#ffff", textAlign: 'center', marginTop: height * 0.01 }} />
                                    <Text style={{ color: "#ffff", textAlign: 'center' }}>Gallery</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: height * 0.08, width: width * 0.19, backgroundColor: "#ed7d2b", marginLeft: width * 0.2, borderRadius: 20 }}
                                    onPress={() => {
                                        this.launchCamera()
                                    }}
                                >
                                    <Icon name={"camera"} size={25} style={{ color: "#ffff", textAlign: 'center', marginTop: height * 0.01 }} />
                                    <Text style={{ color: "#ffff", textAlign: 'center' }}>Camera</Text>
                                </TouchableOpacity>

                            </View>



                        </ActionSheet>
                    </ScrollView>

                </View>


            </>
        )
    }
}