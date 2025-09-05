import { Text, View } from "react-native";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((_sum, _expense) => {
    return _sum + _expense.amount;
  }, 0);

  return (
    <>
      <View>
        <Text>{periodName}</Text>
        <Text>{expensesSum} تومان</Text>
      </View>
    </>
  );
};

export default ExpensesSummary;
