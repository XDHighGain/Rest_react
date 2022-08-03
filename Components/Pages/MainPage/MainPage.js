import { Text, TouchableOpacity, Animated, View } from 'react-native';
import * as React from 'react';
import { MainPage } from './style';

export const MainPageComponent = ({ navigation }) => {
    
    const [backgroundAnimation, setAnimation] = React.useState(new Animated.Value(0));
    const background = backgroundAnimation.interpolate(
        {
            inputRange: [0, 1],
            outputRange: ['rgba(70, 144, 184, 1)', 'rgba(209, 201, 178,1)']
        }
    )

    const [buttonMargin, setMargin] = React.useState(new Animated.Value(0));
    const marginAnimation = buttonMargin.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [15, 2]
        }
    )

    const [buttonOpacity, setOpacity] = React.useState(new Animated.Value(0));
    const opacityAnimation = buttonOpacity.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [0, 1]
        }
    )

    const [buttonElevation, setElevation] = React.useState(new Animated.Value(0));
    const elevationAnimation = buttonElevation.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [0, 10]
        }
    )

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence(
                [
                    Animated.timing(
                        backgroundAnimation,
                        {
                            duration: 3000,
                            useNativeDriver: false,
                            toValue: 1
                        }
                    ),
                    Animated.timing(
                        backgroundAnimation,
                        {
                            duration: 3000,
                            useNativeDriver: false,
                            toValue: 0
                        }
                    )
                ]
            )
        ).start();
        Animated.parallel(
            [
                Animated.timing(buttonMargin,
                    {
                        duration: 1111,
                        useNativeDriver: false,
                        toValue: 1
                    }
                ),
                Animated.timing(buttonOpacity,
                    {
                        duration: 1222,
                        useNativeDriver: false,
                        toValue: 1,
                        delay: 200
                    }
                ),
                Animated.timing(buttonElevation,
                    {
                        duration: 2222,
                        useNativeDriver: true,
                        toValue: 1
                    }
                )
            ]
        ).start()
    })

    return (
        <Animated.View style={[MainPage.Area, { backgroundColor: background, opacity: opacityAnimation }]}>
            <View flex={1} />
            <Animated.View style={[{ flex: marginAnimation }]} >
                <TouchableOpacity style={[MainPage.Button, {elevation: elevationAnimation}]} onPress={() => navigation.navigate('UniverPageComponent')}>
                    <Text style={MainPage.Text}>Univers App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[MainPage.Button, {elevation: elevationAnimation}]} onPress={() => navigation.navigate('PicturePageComponent')}>
                    <Text style={MainPage.Text}>Zoom App</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
}