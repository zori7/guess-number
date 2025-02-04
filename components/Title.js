import {StyleSheet, Text, Platform} from "react-native";
import colors from "../utils/colors";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'center',
        borderWidth: Platform.select({
            ios: 0,
            android: 2
        }),
        borderColor: colors.blue,
        padding: 24,
        color: colors.blue,
        maxWidth: '80%',
        width: 300
    },
})

export default Title