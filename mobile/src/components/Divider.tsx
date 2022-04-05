import React from 'react';
import { View } from 'react-native';


type Props = {
    width: number | string;
    height: number | string;
    color?: string;
}

export default function Line({ width, height, color }: Props) {
    return (
        <View style={{
            height: height,
            backgroundColor: color,
            width: width,
            borderRadius: 5,
            opacity: 0.7,
        }} />
    )
}