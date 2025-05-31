import { StyleSheet } from "react-native";

const Goal = ({ item }) => {
  return (
    <View key={item.index}>
      <Text style={styles.goalItem}>{item.item}</Text>
    </View>
  );
};

export default Goal;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});
