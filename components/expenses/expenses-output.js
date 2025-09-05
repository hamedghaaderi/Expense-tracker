import { FlatList, View } from "react-native";
import ExpensesSummary from "./expenses-summary";
import ExpensesItem from "./expenses-item";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <>
      <View>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
        <FlatList
          data={expenses}
          renderItem={({ item }) => {
            return <ExpensesItem expense={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default ExpensesOutput;
