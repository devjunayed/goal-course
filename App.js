import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalItem from "./components/GoalItem";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [coursGoal, setCoursGoal] = useState([]);

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    if (enteredText.length > 0) {
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
          {/* for smaller data */}
          {/* <View style={styles.goalsContainer}>
            <ScrollView>
              {coursGoal.map((text, index) => (
                <View key={index}>
                  <Text style={styles.goalItem}>{text}</Text>
                </View>
              ))}
            </ScrollView>
          </View> */}

          {/* for larger data */}
          <View style={styles.goalsContainer}>
            <FlatList
              data={coursGoal}
              renderItem={(item) => {
                return (
                  <GoalItem item={item} />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              alwaysBounceVertical={false}
            />
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
    flex: 5,
  },

});

export default App;
