import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const BookmarkIcon = ({fillColor}) => {
  return (
    <View >
      <Svg width="21" height="27" viewBox="0 0 21 27" fill="none">
      <Path id="Vector" d="M0 26.757V2.973C0 2.15543 0.291354 1.45578 0.874063 0.874063C1.45677 0.292346 2.15642 0.000991001 2.973 0H17.838C18.6556 0 19.3557 0.291355 19.9385 0.874063C20.5212 1.45677 20.812 2.15642 20.811 2.973V26.757L10.4055 22.2975L0 26.757ZM2.973 22.2232L10.4055 19.0272L17.838 22.2232V2.973H2.973V22.2232Z" fill={fillColor}/>
      </Svg>
    </View>
  );
};


