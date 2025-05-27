import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [coursGoal, setCoursGoal] = useState([]);

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    if(enteredText.length > 0){
      setCoursGoal((coursGoal) => [...coursGoal, enteredText]);
    }
    setEnteredText("");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.inputWrapper}>
            {/* Input area */}
            <TextInput
              value={enteredText}
              onChangeText={goalInputHandler}
              style={styles.textInput}
              placeholder="Your course Goal!"
            />
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.goalsContainer}>
            {coursGoal.map((text, index) => (
              <Text style={styles.goalItem} key={index}>{text}</Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    padding: 10,
  },
  inputWrapper: {
    flex: 1,
    gap: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: "white"
  }
});

export default App;
