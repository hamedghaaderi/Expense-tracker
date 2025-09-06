import { StyleSheet, Text, View } from "react-native";
import Input from "./input";
import GlobalStyles from "../../constants/colors";

const ExpenseForm = () => {
  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}>مخارج تو</Text>
        <View style={styles.inputsRow}>
          <Input
            label="قیمت"
            style={styles.rowInput}
            inputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: () => {},
            }}
          />
          <Input
            label="تاریخ"
            style={styles.rowInput}
            inputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: () => {},
            }}
          />
        </View>
        <Input
          label="توضیخات"
          inputConfig={{ multiline: true, autoCorrect: false }}
        />
      </View>
    </>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 20,
  },
  title: {
    fontFamily: "samim",
    fontSize: 30,
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    marginBottom: 30,
  },
});
