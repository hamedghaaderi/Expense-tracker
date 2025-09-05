import ExpensesOutput from "../components/expenses/expenses-output";
import EXPENSES from "../fake-data/expenses";

const AllExpensesScreen = () => {
  return (
    <>
      <ExpensesOutput expenses={EXPENSES} expensesPeriod="همه"/>
    </>
  );
};

export default AllExpensesScreen;
