import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";
import colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ rounds, number, onRestart }) => {
    return (
        <View style={styles.container}>
            <Title>
                Game is Over!
            </Title>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} />
            </View>

            <Text style={styles.summary}>Needed <Text style={styles.glow}>{rounds}</Text> rounds to guess the number <Text style={styles.glow}>{number}</Text></Text>

            <PrimaryButton onPress={onRestart}>New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary500,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center'
    },
    glow: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: colors.primary700,
        textShadowColor: colors.primary500,
        textShadowRadius: 3,
        textShadowOffset: 1
    }
})

export default GameOverScreen
