import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    root: {
        flex: 1, 
        padding: 10,
        alignItems: "center", 
        justifyContent:"center",
        paddingTop: 40
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "stretch"
    },
    optionsContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
})

export default style