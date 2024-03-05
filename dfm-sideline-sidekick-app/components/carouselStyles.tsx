// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carouselContainer: {
        position: "relative",

        height: 175,
        width: "100%",

        marginBottom: 10,

        justifyContent: "center",
        alignContent: "center",
    },
    viewPager: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    page: {

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
    progress: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 5,
    },
    dotActive: {
        borderRadius: 50,
        width: 9,
        height: 9,

        marginLeft: 2.5,
        marginRight: 2.5,

        backgroundColor: "#00629B"
    },
    dot: {
        borderRadius: 50,
        width: 9,
        height: 9,

        marginLeft: 2.5,
        marginRight: 2.5,

        backgroundColor: "#D9D9D9"
    }
})

export default styles;