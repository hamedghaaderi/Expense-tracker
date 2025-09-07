import ExpensesOutput from "../components/expenses/expenses-output";
import { getRecentDaysDate } from "../utils/date";
import useExpenses from "../utils/expenses-ctx";

const RecentExpensesScreen = () => {
  const { expenses } = useExpenses();

  const recentExpenses = expenses.filter((_expense) => {
    const today = new Date();
    const recentDaysDate = getRecentDaysDate(today, 7);

    return _expense.date > recentDaysDate && _expense.date <= today;
  });

  return (
    <>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="هفت روز گذشته"
        fallbackText="هیچ موردی در هفت روز گذشته وجود ندارد"
      />
    </>
  );
};

export default RecentExpensesScreen;
