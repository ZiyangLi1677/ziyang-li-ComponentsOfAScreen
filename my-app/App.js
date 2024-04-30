import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.container0}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container1}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container2}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,

  },
  container0: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    height: "10%"
  },
  container1: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "30%"
  },
  container2: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "30%"
  },
  container3: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "30%"
  },
});
