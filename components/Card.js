import {StyleSheet, View} from "react-native";
import colors from "../utils/colors";

const Card = ({ children }) => {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary500,
        gap: 16
    },
})

export default Card
