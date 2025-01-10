import {StyleSheet, TextInput, View, Alert} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../utils/colors";

const StartGameScreen = ({ onStart }) => {
    const [number, setNumber] = useState('')

    const resetHandler = () => {
        setNumber('')
    }

    const confirmHandler = () => {
        const entered = parseInt(number)
        if (isNaN(entered) || entered > 99 || entered < 1) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [
                {
                    text: 'OKAY',
                    style: 'destructive',
                    onPress: resetHandler
                }
            ])
            return
        }

        onStart(entered)
    }

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
                    <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.action}>
                    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
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
    input: {
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary700,
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
