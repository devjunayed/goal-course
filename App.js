import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [coursGoal, setCoursGoal] = useState([]);

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function deleteGoalHandler(id) {
    Alert.alert("Are you sure!", "Can't be retrieved after deletion", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        style: "default",
        onPress: () => {
          const result = coursGoal.filter(
            (goalId) => goalId.id !== id.toString()
          );
          setCoursGoal((curr) => result);
        },
      },
    ]);
  }

  function addGoalHandler() {
    if (enteredText.length > 0) {
      setCoursGoal((coursGoal) => [
        ...coursGoal,
        { text: enteredText, id: Math.random().toString() },
      ]);
    }
    setEnteredText("");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <GoalInput
            addGoalHandler={addGoalHandler}
            enteredText={enteredText}
            goalInputHandler={goalInputHandler}
          />
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
                  <GoalItem item={item.item} onDeleteItem={deleteGoalHandler} />
                );
              }}
              keyExtractor={(item) => item.id}
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

  goalsContainer: {
    flex: 5,
  },
});

export default App;
