import { FlatList, StyleSheet, View } from "react-native";
import ExpensesSummary from "./expenses-summary";
import ExpensesItem from "./expenses-item";
import GlobalStyles from "../../constants/colors";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <>
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary50,
  },
});
