import {StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    const [number, setNumber] = useState()
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={number}
                onChangeText={(v) => setNumber(v)}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={2}
            />
            <View style={styles.actions}>
                <View style={styles.action}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.action}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ac6dd8',
        gap: 16
    },
    input: {
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6d289c',
        backgroundColor: 'white',
        borderRadius: 6,
        width: 80,
        height: 50,
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    actions: {
        flexDirection: 'row',
        paddingHorizontal: 36,
        gap: 8,
    },
    action: {
        flex: 1
    }
})

export default StartGameScreen
