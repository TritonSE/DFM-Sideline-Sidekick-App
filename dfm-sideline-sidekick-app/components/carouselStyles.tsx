// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carouselContainer: {
        height: 150,
    },
    viewPager: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    page: {
        backgroundColor: "#E5EFF5",

        marginLeft: 50,

        padding: 15,

        borderRadius: 10,
        width: 200,
        height: 125,

        justifyContent: "center",
        alignContent: "center",

        FontFamily: "Roboto",
        color: "#000000",

        elevation: 15,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 5,
        textAlign: "center",
    },
    cardDescription: {
        fontSize: 13,
        fontWeight: "400",
        textAlign: "center",
    },
})

export default styles;