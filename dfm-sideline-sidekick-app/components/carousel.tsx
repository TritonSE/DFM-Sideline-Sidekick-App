/* eslint-disable import/namespace */
import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";

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
  // for tracking progress
  // const [page, setPage] = useState(0);

  // // for getting the width of our page
  // const [pageWidth, setPageWidth] = useState(0);
  // const pageRef = useRef(null);

  // const { height, width } = useWindowDimensions();
  // const [progress, setProgress] = useState(0);

  // const spacing = 50;
  // // gets the total size of the carousel and divides by our view width to see how many can fit on the screen
  // const cardsPerView = Math.floor(width / (200 + (spacing + 5) * 2))
  // const numDots = Math.ceil(items.length / cardsPerView);

  // conditional background formatting
  const cardStyle = StyleSheet.create({
    cardBack: {
      backgroundColor: cardColor,
    },
  });

  // renders items in carousel
  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View
      // ref={pageRef}
      // onLayout={(event) => {
      //   const { width } = event.nativeEvent.layout;
      //   setPageWidth(width);
      // }}
      key={item.id}
      style={[styles.page, cardStyle.cardBack]}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </View>
  );

  // const onScrollEnd = (e) => {
  //   const contentOffset = e.nativeEvent.contentOffset;
  //   console.log(contentOffset);
  //   console.log(pageWidth);
  //   console.log(width);
  //   console.log(cardsPerView, numDots);

  //   const dotProgress = Math.ceil((contentOffset.x / (pageWidth + spacing)) / cardsPerView)

  //   setProgress(dotProgress)
  //   console.log('on dot', dotProgress);

  //   // Divide the horizontal offset by the width of the view to see which page is visible
  //   const pageNum = Math.floor(contentOffset.x / (pageWidth + spacing));
  //   console.log('scrolled to page ', pageNum);
  //   setPage(pageNum);
  // }

  // const dots = Array.from({ length: numDots }, (_, index) => (
  //   <View key={index + 1} style={index === progress ? styles.dotActive : styles.dot} />
  // ));

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="normal"
        showsHorizontalScrollIndicator={true}
        snapToInterval={Platform.OS === "ios" ? 10 : 0}
        // onMomentumScrollEnd={onScrollEnd}
        contentContainerStyle={styles.contentContainerStyle} // Add padding to the right to ensure the last item snaps correctly
      />
      {/* <View style={styles.progress}>
        {dots}
      </View> */}
    </View>
  );
};
