import React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

export const GeneralPrinciplesIcon = ({fillColor}) => {
  return (
    <View >
        <Svg width="14" height="29" viewBox="0 0 14 29" fill="none" >
            <G id="Group 48098639">
            <Path
            id="Vector 404"
            d="M0.878296 26.9385H12.9714M11.7586 3.93848V20.4137C11.7586 21.5182 10.8632 22.4137 9.75863 22.4137H4.02998C2.92541 22.4137 2.02998 21.5182 2.02998 20.4137V3.93848C2.02998 2.83391 2.92542 1.93848 4.02998 1.93848H9.75863C10.8632 1.93848 11.7586 2.83391 11.7586 3.93848Z"
            stroke={fillColor} 
            strokeWidth="3"/>
          </G>
        </Svg>
    </View>
  );
};


