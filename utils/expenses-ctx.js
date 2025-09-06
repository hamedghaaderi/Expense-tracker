import { useContext } from "react";
import ExpensesCTX from "../store/expenses-context";

const useExpenses = () => {
  const { expenses, deleteExpense, addExpense, updateExpense } =
    useContext(ExpensesCTX);

  return { expenses, deleteExpense, addExpense, updateExpense };
};

export default useExpenses;
