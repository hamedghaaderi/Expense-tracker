import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconBTN from "../components/ui/icon-btn";
import GlobalStyles from "../constants/colors";
import BTN from "../components/ui/btn";
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

  const { addExpense, updateExpense, deleteExpense } = useExpenses();

  const deleteHandler = () => {
    deleteExpense(id);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      updateExpense(id, {
        description: "44444",
        amount: 111111,
        date: new Date("2022-05-20"),
      });
    } else {
      addExpense({
        description: "11111",
        amount: 222222,
        date: new Date("2025-10-20"),
      });
    }
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <ExpenseForm />
        <View style={styles.buttons}>
          <BTN style={styles.button} mode="flat" onPress={cancelHandler}>
            انصراف
          </BTN>
          <BTN style={styles.button} onPress={confirmHandler}>
            {isEditing ? "به روز رسانی" : "اضافه کردن"}
          </BTN>
        </View>
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
    </>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
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
  button: {
    minWidth: 120,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
