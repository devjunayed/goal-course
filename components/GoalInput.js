import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({
  enteredText,
  goalInputHandler,
  addGoalHandler,
  open,
  setOpen,
}) => {
  return (
    <Modal visible={open} animationType="slide" collapsable={true}>
      <View style={styles.inputWrapper}>
        <Image style={styles.goalImage} source={require("../assets/images/goal.png")} />
        <TextInput
          placeholderTextColor={"white"}
          value={enteredText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course Goal!"
        />
        <View style={styles.buttons}>
          <Button  color={"red"} onPress={() => setOpen(false)} title="Cancel" />
          <Button color={"green"} onPress={addGoalHandler} title="Add Goal" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    padding: 10,
  },
  buttons: {
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    flexDirection: "row",
  },
  goalImage: {
      marginBottom: 60,
  }
});
