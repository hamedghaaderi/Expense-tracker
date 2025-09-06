import { useReducer } from "react";
import ExpensesCTX from "../store/expenses-context";
import EXPENSES from "../fake-data/expenses";

const expensesReducer = (expenses, action) => {
  switch (action.type) {
    case "ADD":
      const id = Date.now().toString();

      return [...expenses, { ...action.payload, id: id }];
      break;

    case "DELETE":
      return expenses.filter((_expense) => _expense.id !== action.payload);
      break;

    case "UPDATE":
      const expenseToUpdateIndex = expenses.findIndex(
        (_expense) => _expense.id === action.payload.id
      );

      const updatableExpense = expenses[expenseToUpdateIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      
      const updatedExpenses = [...expenses];
      updatedExpenses[expenseToUpdateIndex] = updatedItem;

      return updatedExpenses;
      break;

    default:
      return expenses;
      break;
  }
};

const ExpensesProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const contextValue = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <>
      <ExpensesCTX.Provider value={contextValue}>
        {children}
      </ExpensesCTX.Provider>
    </>
  );
};

export default ExpensesProvider;
