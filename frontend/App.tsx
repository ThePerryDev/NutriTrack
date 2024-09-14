import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});