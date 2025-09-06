import ExpensesOutput from "../components/expenses/expenses-output";
import EXPENSES from "../fake-data/expenses";
import useExpenses from "../utils/expenses-ctx";

const AllExpensesScreen = () => {
  const { expenses } = useExpenses();

  return (
    <>
      <ExpensesOutput
        expenses={expenses}
        expensesPeriod="همه"
        fallbackText="هیچ موردی وجود ندارد"
      />
    </>
  );
};

export default AllExpensesScreen;
