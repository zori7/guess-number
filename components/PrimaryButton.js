import {Pressable, StyleSheet, Text, View} from "react-native";

const PrimaryButton = ({ children, onPress }) => {
    const pressHandler = () => {
        onPress?.()
    }

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => pressed ? [styles.button, styles.pressed] : styles.button} android_ripple={{ color: '#8245ac' }} onPress={pressHandler}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#bf88e4',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.7
    }
})

export default PrimaryButton