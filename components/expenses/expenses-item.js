import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import { formattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

const ExpensesItem = ({ expense }) => {
  const { navigate } = useNavigation();
  const pressHandler = () => {
    navigate("ManageScreen", { expenseId: expense.id });
  };

  return (
    <>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.expenseItem}>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.textBase, styles.description]}>
              {expense.description}
            </Text>
            <Text style={styles.textBase}>{formattedDate(expense.date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={[styles.textBase, styles.amount]}>
              {expense.amount} تومان
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  descriptionContainer: {
    alignItems: "flex-end",
  },
  textBase: {
    color: GlobalStyles.colors.gray500,
    fontFamily: "samim",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.primary400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.75,
  },
});
