import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#fff', '#518566']}>
      <ImageBackground
          style={styles.rootScreen}
          imageStyle={styles.background}
          source={require('./assets/background.png')}
          resizeMode="cover">
        <StartGameScreen />
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
