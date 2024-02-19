import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useParams } from "react-router-dom";

import { getPrinciple } from "../api/principles";
import type { Principle } from "../api/principles";

import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./GenPrinDynamStyles";
import GeneralPrinciples from "./generalPrinciples";






export type RootStackParamList = {
    // Define the parameters for your screens here
    Principles: { principleObjectId: string }; // Example parameter
} & ParamListBase;
  
  // Define the type for the route parameters
type PrinciplesScreenRouteProp = RouteProp<RootStackParamList, "Principles">;
  
  // Define the type for the navigation object
type PrinciplesScreenNavigationProp = StackNavigationProp<RootStackParamList, "Principles">;
  
type Props = {
    route: PrinciplesScreenRouteProp;
    navigation: PrinciplesScreenNavigationProp;
};

type StringValue = string | string[] | { [key: string]: StringValue };

export default function GeneralPrinciplesDynam({ route, navigation }: Props) {
    const { params } = route; // Destructure params from the route object

    const [generalPrinciple, setGeneralPrinciple] = React.useState<Principle>();

    React.useEffect(() => {
        if (params?.principleObjectId) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          getPrinciple(params.principleObjectId).then((result) => {
            if (result.success) {
                setGeneralPrinciple(result.data);
            } else {
              console.error("Error fetching principle data:", result.error);
            }
          });
        }
      }, [params]);


      if (!generalPrinciple) {
        return <Text>Loading...</Text>;
      }

    //   const renderContent = () => {
        if (Array.isArray(generalPrinciple?.content)) {
        //   return (
            <View style={styles.container}>
              <Text style={styles.title}>{generalPrinciple?.title}</Text>
              <FlatList
                data={generalPrinciple?.content}
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
        //   );
        } else {
            //TODO: Make the bullet points in generalPrinciples automatically make sufficient # of bullet points based on content.content
        //   return <GeneralPrinciples title={generalPrinciple.title} content={generalPrinciple.content} />;
        // <GeneralPrinciples title={generalPrinciple?.title} content={generalPrinciple?.content} />;
        <GeneralPrinciples title={generalPrinciple?.title}/>;
        }
    //   };
    
    //   <div>{renderContent()}</div>;

    }



// const GeneralPrinciplesDynam: React.FC = () => {
//   const { id } = useParams();
//   const [generalPrinciple, setGeneralPrinciple] = React.useState<Principle>();

//   React.useEffect(() => {
//     const fetchGeneralPrinciple = async () => {
//         getPrinciple(id!).then((result) => {
//             if (result.success) {
//                 setGeneralPrinciple(result.data);
//             } else {
//               console.error("Error fetching general principle data:", result.error);
//             }
//         });
//     //   try {
//     //     const principle = await getPrinciple(id!);
//     //     setGeneralPrinciple(principle);
//     //   } catch (error) {
//     //     console.error("Error fetching general principle:", error);
//     //   }
//     };

//     fetchGeneralPrinciple();
//   }, [id]);

//   if (!generalPrinciple) {
//     return <Text>Loading...</Text>;
//   }

//   const renderContent = () => {
//     if (Array.isArray(generalPrinciple.content)) {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.title}>{generalPrinciple.title}</Text>
//           <FlatList
//             data={generalPrinciple.content}
//             // TODO: figure out identifier for when content is array
//             keyExtractor={(item) => item.id}
//             ItemSeparatorComponent={() => <View style={styles.divider} />}
//             renderItem={({ item }) => (
//               <View style={styles.listItemContainer}>
//                 <View style={styles.listItemTextContainer}>
//                   <Text style={styles.listItemTitle}>{item.title}</Text>
//                   <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
//                 </View>
//                 <Icon name="chevron-right" size={12} color="#909090" />
//               </View>
//             )}
//           />
//         </View>
//       );
//     } else {
//         //TODO: Make the bullet points in generalPrinciples automatically make sufficient # of bullet points based on content.content
//       return <GeneralPrinciples title={generalPrinciple.title} content={generalPrinciple.content} />;
//     }
//   };

//   return <div>{renderContent()}</div>;
// };

// export default GeneralPrinciplesDynam
