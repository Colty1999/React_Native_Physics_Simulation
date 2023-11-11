import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import bavarianLogo from '../../public/logo192.png'
import backgroundImage from '../../public/GrilledSausage.jpg'
import BVButton from '../../common/BVButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';

interface MenuProps {
    navigation: NativeStackNavigationProp<ParamListBase, string, string | undefined>;
    route: RouteProp<ParamListBase, string>;
}


export default function Menu({ navigation, route }: MenuProps) {
    // var [running, setRunning, gameEngine, setGameEngine, entities] = [props.running, props.setRunning, props.gameEngine, props.setGameEngine, props.entities];
    // debugger;
    return (

        <>
            <ImageBackground style={{ flex: 1 }} source={backgroundImage} resizeMode="cover" blurRadius={1}>
                <View style={{ flex: 1, backgroundColor: 'rgba(214, 0, 0, 0.8)' }} />
                <View style={{ alignItems: 'center' }}>
                    <View style={{ position: 'absolute', top: -50 }}>
                        <Image source={bavarianLogo} style={{ width: 193 / 2, height: 192 / 2 }} />
                    </View>
                </View>


                {/* className="align-top float-end ms-3" */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
                <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flex: 7, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 40, width: '90%' }}>
                        <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10 }}>
                            <Text style={{ fontSize: 60, textAlign: 'center', fontWeight: 'bold', color: 'rgba(214, 0, 0, 1)', lineHeight: 60 }}>BAVARIAN VILLAGE</Text>
                            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: -10 }}>OFFICIAL APP</Text>
                        </View>

                        <View style={{ flex: 4, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>

                            <BVButton onPress={() => { navigation.navigate('Game') }} title='START GAME' style={{ width: 300, marginBottom: 20 }} />
                            <BVButton onPress={() => { alert("lala") }} title='HOW TO PLAY' style={{ width: 300, marginBottom: 20 }} />
                            <BVButton title='YOUR CODES' style={{ width: 300 }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4 }} />

                {/* <button  className={`booknow ${className}`} {...rest}>
                              <span className="align-top float-start" style={{ textIndent: "1.5rem" }}>{props.title}</span>
                              
                          </button> */}
                <View style={{ flex: 0.5, backgroundColor: 'black' }}>
                    <Text style={{ fontSize: 12, color: 'white', textAlign: 'right', paddingRight: 10, paddingTop: 10 }}>© 2022, BAVARIAN VILLAGE ALL RIGHT RESERVED</Text>
                </View>
            </ImageBackground>
        </>
    )
}
