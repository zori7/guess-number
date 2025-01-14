import {StyleSheet, Text} from "react-native";
import colors from "../utils/colors";

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: colors.primary700,
        fontSize: 24
    }
})

export default InstructionText
