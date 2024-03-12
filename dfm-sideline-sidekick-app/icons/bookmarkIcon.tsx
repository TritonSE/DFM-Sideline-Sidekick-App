import PropTypes from "prop-types";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export const BookmarkIcon = ({ fillColor}) => {
  return (
    <View>
      <Svg width="21" height="27" viewBox="0 0 21 27" >
        <Path
          id="Vector"
          d="M0 26.757V2.973C0 2.15543 0.291354 1.45578 0.874063 0.874063C1.45677 0.292346 2.15642 0.000991001 2.973 0H17.838C18.6556 0 19.3557 0.291355 19.9385 0.874063C20.5212 1.45677 20.812 2.15642 20.811 2.973V26.757L10.4055 22.2975L0 26.757ZM2.973 22.2232L10.4055 19.0272L17.838 22.2232V2.973H2.973V22.2232Z"
          fill={fillColor as string}
          fill-rule="evenodd"
        />
      </Svg>
    </View>
  );
};

export const BookmarkTag = ({ fillColor}) => {
  return (
    <View>
      <Svg width="21" height="27" viewBox="0 0 21 27" >
        <Path
          id="Vector"
          d="M2.973 0C2.15642 0 1.45677 0.292346 0.874063 0.874063C0.291354 1.45578 0 2.15543 0 2.973V26.757L10.4055 22.2975L20.811 26.757V2.973C20.812 2.15642 20.5212 1.45677 19.9385 0.874063C19.3557 0.291354 18.6556 0 17.838 0H2.973ZM10.4055 19.0272L17.838 22.2232V2.973H2.973V22.2232L10.4055 19.0272Z"
          fill={fillColor as string}
        />
      </Svg>
    </View>
  );
};

BookmarkIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

BookmarkTag.propTypes = {
  fillColor: PropTypes.string.isRequired,
};


