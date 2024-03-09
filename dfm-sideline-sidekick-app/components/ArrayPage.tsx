import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./ArrayPageStyles";

type ContentItem = Record<string, string>;

type Content = {
  title: string;
  content: ContentItem;
};

export type RootStackParamList = {
  GeneralPrinciples: { titleProp: string; contentProp: Content } | undefined;
};

type ArrayProps = {
  arrayProp: Content[];
  title: string;
};

const temp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

 
const ArrayPage: React.FC<ArrayProps> = ({ arrayProp, title }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleItemPress = (item: Content) => {
    navigation.navigate("GeneralPrinciples", { titleProp: item.title, contentProp: item });
  };

  const renderListItem = ({ item, index }: { item: Content; index: number }) => (
    <TouchableOpacity
      onPress={() => {
        handleItemPress(item);
      }}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.enumeration}>{index + 1}</Text>
        <View style={styles.listItemTextContainer}>
          <Text style={styles.listItemTitle}>{item.title}</Text>
          <Text style={styles.listItemSubtitle}>{temp}</Text>
        </View>
        <Icon name="chevron-right" size={12} color="#909090" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButtonContainer}
        >
          <Icon name="chevron-left" size={12} color="#000000" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={arrayProp}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          renderItem={renderListItem}
        />
      </View>
    </View>
  );
};

export default ArrayPage;
