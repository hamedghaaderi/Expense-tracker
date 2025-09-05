import { Text } from "react-native";

const ExpensesItem = ({ expense }) => {
  return (
    <>
      <Text>{expense.description}</Text>
    </>
  );
};

export default ExpensesItem;
