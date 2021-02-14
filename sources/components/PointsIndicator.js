import React from 'react'
import { Image } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

export default function PointsIndicator({points, color, radius}) {
    return (
        <ProgressCircle
            radius={radius ? radius : 30}
            color="#36C7FF"
            percent={points}
            borderWidth={4}
            bgColor={color ? color : "#423A8C"}
            shadowColor="#181835"
        >
            <Image source={require('../assets/image.png')} style={{width: 30, height: 30}}/>
        </ProgressCircle>
    )
}
