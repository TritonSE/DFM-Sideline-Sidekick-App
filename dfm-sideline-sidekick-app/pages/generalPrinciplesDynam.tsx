import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useParams } from "react-router-dom";

import { getGeneralPrincipleById } from "../../backend/controllers/issueController";

import styles from "./GenPrinDynamStyles";
import GeneralPrinciples from "./generalPrinciples";

// TODO: Find out where to use overview

const GeneralPrinciplePage: React.FC = () => {
  const { id } = useParams();
  const [generalPrinciple, setGeneralPrinciple] = React.useState<any>();

  React.useEffect(() => {
    const fetchGeneralPrinciple = async () => {
      try {
        const principle = await getGeneralPrincipleById(id);
        setGeneralPrinciple(principle);
      } catch (error) {
        console.error("Error fetching general principle:", error);
      }
    };

    fetchGeneralPrinciple();
  }, [id]);

  if (!generalPrinciple) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    if (Array.isArray(generalPrinciple.content)) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{generalPrinciple.title}</Text>
          <FlatList
            data={generalPrinciple.content}
            // TODO: figure out identifier for when content is array
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            renderItem={({ item }) => (
              <View style={styles.listItemContainer}>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.listItemTitle}>{item.title}</Text>
                  <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                </View>
                <Icon name="chevron-right" size={12} color="#909090" />
              </View>
            )}
          />
        </View>
      );
    } else {
        //TODO: Make the bullet points in generalPrinciples automatically make sufficient # of bullet points based on content.content
      return <GeneralPrinciples title={generalPrinciple.title} content={generalPrinciple.content} />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default GeneralPrinciplePage;
