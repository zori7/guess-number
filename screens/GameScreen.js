import {Alert, Dimensions, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import {useEffect, useState} from "react";
import {generateRandomBetween} from "../utils/random";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons"

const deviceWidth = Dimensions.get('window').width
const isSmallScreen = deviceWidth < 400

const GameScreen = ({ number, onGameOver, onIncrementRound }) => {
    const { height } = useWindowDimensions()
    const isLandscape = height < 540

    const [min, setMin] = useState(1)
    const [max, setMax] = useState(100)
    const [guess, setGuess] = useState(null)

    useEffect(() => {
        if (min === max) return

        const newGuess = generateRandomBetween(min, max, guess)
        setGuess(newGuess)

        onIncrementRound()

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
            {isLandscape ? (
                <View style={styles.guessContainer}>
                    <Title>Opponent's guess</Title>
                    <NumberContainer>{guess}</NumberContainer>
                </View>
            ) : (
                <>
                    <Title>Opponent's guess</Title>
                    <NumberContainer>{guess}</NumberContainer>
                </>
            )}

            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>

                <View style={styles.actions}>
                    <View style={styles.action}>
                        <PrimaryButton onPress={() => nextGuessHandler('-')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.action}>
                        <PrimaryButton onPress={() => nextGuessHandler('+')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isSmallScreen ? 16 : 32,
        marginHorizontal: 16,
        padding: 16,
        gap: isSmallScreen ? 8 : 16,
        alignItems: 'center'
    },
    guessContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    instructionText: {
        marginBottom: 8,
        fontSize: 20
    },
    actions: {
        flexDirection: 'row',
        gap: 16
    },
    action: {
        flex: 1
    }
})

export default GameScreen
