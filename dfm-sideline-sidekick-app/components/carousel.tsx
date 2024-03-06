/* eslint-disable import/namespace */
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

import styles from "./carouselStyles";

export type CarouselItem = {
  id: number;
  title: string;
  description: string;
};

export type CarouselProps = {
  items: CarouselItem[];
  cardColor: string;
};

export const Carousel: React.FC<CarouselProps> = ({ items, cardColor }) => {
  const [page, setPage] = useState(0);
  const viewWidth = Dimensions.get("window").width;

  const cardStyle = StyleSheet.create({
    cardBack: {
      backgroundColor: cardColor,
    },
  });

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View key={item.id} style={[styles.page, cardStyle.cardBack]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </View>
  );

  const handleScroll = (e) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / viewWidth);
    setPage(newPage);
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.progress}>
        {items.map((item, index) => (
          <View key={item.id} style={index === page ? styles.dotActive : styles.dot} />
        ))}
      </View>
    </View>
  );
};
