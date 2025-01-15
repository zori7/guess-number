import {StyleSheet, Text, View, Dimensions} from "react-native";
import colors from "../../utils/colors";

const deviceWidth = Dimensions.get('window').width
const isSmallScreen = deviceWidth < 400

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
        padding: isSmallScreen ? 16: 24,
        margin: isSmallScreen ? 16 : 24,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffffaa'
    },
    text: {
        fontSize: isSmallScreen ? 24 : 32,
        fontFamily: 'open-sans-bold',
        color: colors.primary500
    }
})

export default NumberContainer
