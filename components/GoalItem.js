import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, item.id)}>
      <View>
        <Text style={styles.goalItem}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});
