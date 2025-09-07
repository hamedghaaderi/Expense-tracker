import ExpensesOutput from "../components/expenses/expenses-output";
import Loading from "../components/ui/loading";
import { useGetExpenses } from "../hook/api/expenses";
import { getRecentDaysDate } from "../utils/date";
import useExpenses from "../utils/expenses-ctx";

const RecentExpensesScreen = () => {
  const { expenses } = useExpenses();
  const { data, status, refetch } = useGetExpenses();

  const recentExpenses = data?.filter((_expense) => {
    const today = new Date();
    const recentDaysDate = getRecentDaysDate(today, 7);

    return _expense.date > recentDaysDate && _expense.date <= today;
  });

  return (
    <>
      {status === "pending" && <Loading />}
      {status === "error" && (
        <Error message="اطلاعاتی دریافت نشد" onConfirm={refetch} />
      )}
      {status === "success" && (
        <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="هفت روز گذشته"
        fallbackText="هیچ موردی در هفت روز گذشته وجود ندارد"
      />
      )}
    </>
  );
};

export default RecentExpensesScreen;
