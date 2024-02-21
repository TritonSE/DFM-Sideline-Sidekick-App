import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import ArrayPage from "../components/ArrayPage";
import BulletPoint from "../components/BulletPoint";

import styles from "./generalPrinciplesStyles";

// type GeneralProps = {
//   titleProp: string;
//   overviewProp?: object;
//   contentProp: {
//     title: string;
//     content: { text: string, subpoints?: {text: string} | undefined }[];
//   }[] | {
//     title: string;
//     content: { text: string, subpoints?: {text: string} | undefined }[];
//   };
// };

// type GeneralProps = {
//   titleProp: string;
//   overviewProp?: object;
//   contentProp: object;
// };

type ContentItem = Record<string, string>;

type Content = {
  title: string;
  content: ContentItem;
};

type GeneralProps = {
  titleProp: string;
  overviewProp?: object;
  contentProp: Content | Content[];
};

// const GeneralPrinciples = (title, content) => {
const GeneralPrinciples: React.FC<GeneralProps> = ({ titleProp, overviewProp, contentProp }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  // const { title, content } = contentProp;

  if (Array.isArray(contentProp)) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{titleProp}</Text>
        <ArrayPage arrayProp={contentProp}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <AntIcon name="close" style={styles.button} />
        </TouchableOpacity>
        <Text style={styles.title}>{titleProp}</Text>
        <Text style={styles.subTitle}>{contentProp.title}</Text>
        <BulletPoint content={contentProp.content} />
      </View>
    );
  }
};

export default GeneralPrinciples;
