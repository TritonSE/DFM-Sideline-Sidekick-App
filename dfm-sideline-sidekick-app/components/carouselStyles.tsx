// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carouselContainer: {
        display: "flex",
        flexDirection: "row",

        height: "25%"
    },
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default styles;