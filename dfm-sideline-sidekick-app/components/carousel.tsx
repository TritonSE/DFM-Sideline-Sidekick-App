/* eslint-disable import/namespace */
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from 'react-native-pager-view';

import styles from "./carouselStyles";


export type CarouselItem = {
    id: number;
    title: string;
    description: string;
};

export type CarouselProps = {
    items: CarouselItem[];
    cardColor: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, cardColor }) => {

    const [page, setPage] = useState(1);

    const cardStyle = StyleSheet.create({
        cardBack: {
            backgroundColor: cardColor
        }
    });

    return (
        <View style={styles.carouselContainer}>
            <PagerView
                style={styles.viewPager}
                initialPage={0}
                pageMargin={-100}
                offscreenPageLimit={3}
                onPageSelected={e => {setPage(e.nativeEvent.position)}}
            >
                {items.map((item) => (
                    <View key={item.id} style={[styles.page, cardStyle.cardBack]}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
                    </View>
                ))}
            </PagerView>
            <View style={styles.progress}>
                {items.map((item) => (
                    <View key={item.id} style={(item.id - 1 === page ? (styles.dotActive) : (styles.dot))}/>
                ))}
            </View>
        </View>
    );
};