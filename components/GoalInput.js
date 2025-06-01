import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ enteredText, goalInputHandler, addGoalHandler }) => {
  return (
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
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
