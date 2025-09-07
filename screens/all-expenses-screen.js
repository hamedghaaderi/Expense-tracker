import ExpensesOutput from "../components/expenses/expenses-output";
import Error from "../components/ui/error";
import Loading from "../components/ui/loading";
import { useGetExpenses } from "../hook/api/expenses";
import useExpenses from "../utils/expenses-ctx";

const AllExpensesScreen = () => {
  const { expenses } = useExpenses();
  const { data, status, refetch } = useGetExpenses();

  return (
    <>
      {status === "pending" && <Loading />}
      {status === "error" && (
        <Error message="اطلاعاتی دریافت نشد" onConfirm={refetch} />
      )}
      {status === "success" && (
        <ExpensesOutput
          expenses={data}
          expensesPeriod="همه"
          fallbackText="هیچ موردی وجود ندارد"
        />
      )}
    </>
  );
};

export default AllExpensesScreen;
