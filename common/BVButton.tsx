import { Text, StyleSheet, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';
import * as React from "react";
import ArrowSVG from '../public/svg/ArrowSVG';

export interface BVButtonProps {
    style?: any;
    title?: string;
    onPress?: () => void;
}


const BVButton = (props: BVButtonProps) => (
    <TouchableOpacity style={[styles.button, { ...props.style }]} onPress={props.onPress} >
        <Text style={styles.text}>
            {props.title}


        </Text>
        {/* <View style={{ paddingRight: 20 }} /> */}
        <View style={styles.svg}>
            <ArrowSVG />
        </View>

    </TouchableOpacity >
)

export default BVButton

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        paddingTop: 5,
        paddingBottom: 2,
        color: 'white',
        minWidth: 240,
        backgroundColor: 'rgba(214, 0, 0, 0.8)',
        fontSize: 27,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: 40,
        fontWeight: 'bold',
        // transition: .2s ease-in-out 0s
        // &:hover:not([disabled]) {
        //   transform: scale(1.1);
        //   background-color: base.$red;

    },
    text: {
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
        // flex: 5,
        // justifyContent: 'flex-start',
        marginRight: 'auto',
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    },
    svg: {
        paddingTop: 5,
        paddingRight: 3,
    }
})