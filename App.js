import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const startGameHandler = (number) => {
    setUserNumber(number)
    setGameOver(false)
  }

  const gameOverHandler = () => {
    setGameOver(true)
  }

  let screen = <StartGameScreen onStart={startGameHandler} />

  if (userNumber) {
    screen = <GameScreen number={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={['#fff', colors.green]}>
      <ImageBackground
          style={styles.rootScreen}
          imageStyle={styles.background}
          source={require('./assets/background.png')}
          resizeMode="cover">
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  background: {
    opacity: 0.3
  }
});
