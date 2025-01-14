import {StyleSheet, Text, View} from "react-native";
import colors from "../../utils/colors";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.blue,
        padding: 24,
        margin: 24,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffffaa'
    },
    text: {
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: colors.primary500
    }
})

export default NumberContainer
