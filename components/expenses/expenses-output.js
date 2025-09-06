import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./expenses-summary";
import ExpensesItem from "./expenses-item";
import GlobalStyles from "../../constants/colors";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
        {expenses.length > 0 ? (
          <FlatList
            data={expenses}
            renderItem={({ item }) => {
              return <ExpensesItem expense={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>{fallbackText}</Text>
          </View>
        )}
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
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontFamily: "samim",
    fontSize: 20,
    color: GlobalStyles.colors.gray500,
  },
});
