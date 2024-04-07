import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: 'lightgrey',
        borderRadius: 10,
        width: '48%',
        height: '48%',
        alignItems: 'center',
        padding: 10,
    },
    selectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: '#8AD5FE'
    },
    optionImage: {
        width: '100%',
        resizeMode: 'contain',
        flex: 1,
    },
    optionText: {
        fontWeight: 'bold',
        color: 'black',
    },
    selectedText: {
        color: '#40BEF7',
        fontWeight: 'bold'
    }
})

export default style