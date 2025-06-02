import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dedede" }}
        onPress={onDeleteItem.bind(this, item.id)}
      >
        <Text style={styles.gaolText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
 
  },
  gaolText: {
    padding: 8,
    color: "white",
  }
});
