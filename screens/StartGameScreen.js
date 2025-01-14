import {StyleSheet, TextInput, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../utils/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onStart }) => {
    const [number, setNumber] = useState('')

    const resetHandler = () => {
        setNumber('')
        Keyboard.dismiss()
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.rootContainer}>
                <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a number</InstructionText>
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
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
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
