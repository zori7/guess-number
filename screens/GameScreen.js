import {Alert, StyleSheet, Text, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import {useEffect, useState} from "react";
import {generateRandomBetween} from "../utils/random";
import NumberContainer from "../components/game/NumberContainer";

const GameScreen = ({ number, onGameOver }) => {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(100)
    const [guess, setGuess] = useState(null)

    useEffect(() => {
        if (min === max) return

        const newGuess = generateRandomBetween(min, max, guess)
        setGuess(newGuess)

        if (newGuess === number) {
            onGameOver()
        }
    }, [min, max]);

    const nextGuessHandler = (direction) => {
        if (direction === '-') {
            if (guess < number) {
                Alert.alert('DON`T LIE!')
                return
            }

            setMax(guess)
        } else {
            if (guess > number) {
                Alert.alert('DON`T LIE!')
                return
            }

            setMin(guess + 1)
        }
    }

    return (
        <View style={styles.container}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{guess}</NumberContainer>

            <View>
                <Text>Higher or lower?</Text>

                <View style={styles.actions}>
                    <PrimaryButton onPress={() => nextGuessHandler('-')}>-</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('+')}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 16,
        padding: 16,
        gap: 16
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16
    },
})

export default GameScreen
