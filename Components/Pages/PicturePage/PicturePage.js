import { Button, Text, TouchableOpacity, StyleSheet, View, ImageBackground, Image, Dimensions, Animated, Alert } from 'react-native';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainPage } from './style';

import { ImagePicker } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

export const PicturePageComponent = ({ navigation }) => {

    const PicturePageStyle = StyleSheet.create({
        Area: {
            backgroundColor: 'rgba(70, 144, 184, 0.8)',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
        },
        Header: {
            flexDirection: 'row',
            flex: 1
        },
        LeftContainer: {
            flexDirection: 'column',
            flex: 1,
            padding: 10
        },
        RightContainer:
        {
            flexDirection: 'column',
            flex: 1,
            padding: 10
        },
        FileNameContainer: {
            borderBottomWidth: 1,
            padding: 4,
        },
        ResolutionContainer: {
            padding: 4
        },
        Text: {
            fontSize: 15,
            marginLeft: 10
        },
        UploadImageButton: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#e5d3f2',
            alignItems: 'center',
            margin: 10,
            borderRadius: 22,  
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowRadius: 5,   
            flex: 1
        },
        ImageContainer: {
            //backgroundColor: '#000000',
            //backgroundColor: 'rgba(111,111,111,0.5)',
            flex: 5,
            padding: 1,
            opacity: 1,
        },
        Image: {
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
           
        }
    })

    var ImagePicker = require('react-native-image-picker');
    
    const [fileUri, setFileUri] = React.useState();
    const [resolution, setResolution] = React.useState(0);
    const [fileName, setFileName] = React.useState('');

    const requestCameraPermission = () => {

        const granted = PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: "Cool Photo App Camera Permission",
                message:
                    "Cool Photo App needs access to your camera " +
                    "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }

    };

    const pic = () => {
        requestCameraPermission();


        const options = {
            mediaType: 'photo'
        }
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel == true) {
                console.log(response);
            }
            else {
                setFileUri(response.assets[0].uri);
                setResolution(response.assets[0].width.toString() + 'x' + response.assets[0].height.toString());
                setFileName(response.assets[0].fileName);
            }
        });
    }

    const ShowDetails = () => {
        if (fileName == '') {
            Alert.alert('No result', 'Open any picture');
        }
        else {
            Alert.alert('File name - ' + fileName, 'Resolution - ' + resolution)
        }

    };

    const [elevation, setElevation] = useState(new Animated.Value(0))
    const elevationInterpolating = elevation.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [3, 15]
        }
    )

    useEffect(() => {
        Animated.loop(
            Animated.sequence(
                [
                    Animated.timing(elevation,
                        {
                            duration: 1200,
                            toValue: 1,
                            useNativeDriver: true
                        }
                        ),
                        Animated.timing(elevation,
                            {
                                duration: 1200,
                                toValue: 0,
                                useNativeDriver: true
                            }
                            )
                ]
            )
        ).start()
    })

    return (
        <SafeAreaView style={PicturePageStyle.Area} >
                        <View style={[PicturePageStyle.Header]}>
                            <Animated.View style={PicturePageStyle.LeftContainer}>
                                <TouchableOpacity style={[PicturePageStyle.UploadImageButton, {elevation: elevationInterpolating}]} onPress={ShowDetails}>
                                    <Image flex={1} source={require('./pics/info.png')} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={PicturePageStyle.RightContainer}>
                                <TouchableOpacity style={[PicturePageStyle.UploadImageButton, {elevation: elevationInterpolating}]} onPress={pic}>
                                    <Image flex={1} source={require('./pics/add.png')} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                        <View style={{backgroundColor:'#000000', height:1, marginLeft: 5, marginRight: 5}} />
                        <View  style={[PicturePageStyle.ImageContainer]}>
                            <ReactNativeZoomableView
                                maxZoom={1.5}
                                minZoom={0.5}
                                zoomStep={0.1}
                                initialZoom={1}
                                bindToBorders={true}
                                style={{
                                    flex: 1,
                                    padding: 10,
                                 }}
                            >
                                <Image
                                    style={PicturePageStyle.Image}
                                    source={{ uri: fileUri }}
                                />
                            </ReactNativeZoomableView>
                        </View>
        </SafeAreaView>
    );
}