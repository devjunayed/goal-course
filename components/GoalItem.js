import { StyleSheet, View, Text } from "react-native";


const GoalItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.goalItem}>{item.item}</Text>
    </View>
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
