/* eslint-disable import/namespace */
import React from "react";
import { Text, View } from "react-native";
import PagerView from 'react-native-pager-view';

import styles from "./carouselStyles";

export type CarouselItem = {
  id: number;
  title: string;
  description: string;
};

export const Carousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  return (
    <View style={styles.carouselContainer}>
        <PagerView style={styles.viewPager} initialPage={0} offscreenPageLimit={2}>
            {items.map((item) => (
                <View key={item.id} style={styles.page}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
            ))}
        </PagerView>
    </View>
  );
};

{/* <View style={styles.carouselContainer}>
        <Text>Hi</Text>
        <PagerView style={styles.viewPager} initialPage={0}>
            {items.map((item) => (
                <View key={item.id} style={styles.page}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
            ))}
        </PagerView>
</View> */}