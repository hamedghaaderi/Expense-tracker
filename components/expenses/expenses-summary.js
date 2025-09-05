import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((_sum, _expense) => {
    return _sum + _expense.amount;
  }, 0);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>{expensesSum} تومان</Text>
      </View>
    </>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontFamily: "samim",
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontFamily: "samim",
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
  },
});
