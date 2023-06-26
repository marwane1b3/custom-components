// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ECF0F1"
        statusBarStyle="dark-content"
      />
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
