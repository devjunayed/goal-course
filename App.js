import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  Pressable,
  Text,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Pressable onPress={() => setOpen(true)} style={styles.button}>
          <Text style={styles.buttonTxt}>+</Text>
        </Pressable>
        <GoalInput
          open={open}
          addGoalHandler={addGoalHandler}
          enteredText={enteredText}
          goalInputHandler={goalInputHandler}
          setOpen={setOpen}
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

        {coursGoal.length === 0 ? (
          <View style={styles.noCoursGoalWrapper}>
            <Text style={styles.noCoursGoalTxt}>No Course Goal</Text>
          </View>
        ) : (
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
        )}
      </View>
    </>
  );  
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appContainer: {
    marginTop: 40,
    flex: 1,
    padding: 10,
  },

  goalsContainer: {
    flex: 5,
  },
  button: {
    position: "absolute",
    bottom: 60,
    right: 30,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    elevation: 1,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  buttonTxt: {
    fontSize: 30,
    color: "white",
  },
  noCoursGoalTxt: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  noCoursGoalWrapper: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
