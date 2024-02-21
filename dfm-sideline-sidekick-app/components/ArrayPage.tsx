import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

import styles from "./ArrayPageStyles";

type ContentItem = {
    [key: string]: string;
  };

type Content = {
  title: string;
  content: ContentItem;
};

type ArrayProps = {
    arrayProp: Content[];
}


  const content = [
    {
    title: 'General Principles',
    content: {
      '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)': "",
      "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker"
      }
    },
    {
      title: 'General Principles 2',
      content: {
        '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)': "",
        "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker"
        }
      }
    ];
const temp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

const ArrayPage: React.FC<ArrayProps> = ( arrayProp ) => {

  const renderListItem = ({ item, index }) => (
    <View>
        <View style={styles.listItemContainer}>
            <Text style={styles.enumeration}>{index+1}</Text>
            <View style={styles.listItemTextContainer}>
                <Text style={styles.listItemTitle}>{item.title}</Text>
                <Text style={styles.listItemSubtitle}>{temp}</Text>
            </View>
            <Icon name="chevron-right" size={12} color="#909090" />
        </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={content}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default ArrayPage;