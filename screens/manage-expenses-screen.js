import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import IconBTN from "../components/ui/icon-btn";
import GlobalStyles from "../constants/colors";
import useExpenses from "../utils/expenses-ctx";
import ExpenseForm from "../components/manage expense/expense-form";

const ManageExpensesScreen = ({ route, navigation }) => {
  const id = route.params?.expenseId;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "ویرایش مخارج" : "اضافه کردن مخارج",
    });
  }, [navigation, isEditing]);

  const { expenses, addExpense, updateExpense, deleteExpense } = useExpenses();

  const selectedExpense = expenses.find((_expense) => _expense.id === id);

  const deleteHandler = () => {
    deleteExpense(id);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseOBJ) => {
    if (isEditing) {
      updateExpense(id, expenseOBJ);
    } else {
      addExpense(expenseOBJ);
    }
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <ExpenseForm
            submitLabel={isEditing ? "به روز رسانی" : "اضافه کردن"}
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            defaultValues={selectedExpense}
          />
          {isEditing && (
            <View style={styles.deleteContainer}>
              <IconBTN
                icon="trash"
                color={GlobalStyles.colors.error500}
                size={36}
                onPress={deleteHandler}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
