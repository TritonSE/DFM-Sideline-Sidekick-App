import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import ArrayPage from "../components/ArrayPage";
import BulletPoint from "../components/BulletPoint";

import styles from "./generalPrinciplesStyles";

type ContentItem = Record<string, string>;

type Content = {
  title: string;
  content: ContentItem;
};

type GeneralProps = {
  route: {
    params: {
      titleProp: string;
      overviewProp?: object;
      contentProp: Content | Content[];
    };
  };
  navigation: any;
};

const GeneralPrinciples: React.FC<GeneralProps> = ({ route, navigation }) => {
  const { titleProp, contentProp } = route.params;

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
        <ArrayPage arrayProp={contentProp} title={titleProp} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
