import ExpensesOutput from "../components/expenses/expenses-output";
import EXPENSES from "../fake-data/expenses";

const RecentExpensesScreen = () => {
  return (
    <>
      <ExpensesOutput expenses={EXPENSES} expensesPeriod="هفت روز گذشته" />
    </>
  );
};

export default RecentExpensesScreen;
