import { StyleSheet, Text, View } from "react-native";
import Input from "./input";
import GlobalStyles from "../../constants/colors";
import { useState } from "react";
import BTN from "../ui/btn";

const ExpenseForm = ({ submitLabel, onCancel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
  });

  const inputHandler = (identifier, enteredValue) => {
    setInputs((_prevValues) => {
      return {
        ..._prevValues,
        [identifier]: { value: enteredValue, isVallid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseOBJ = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmountValid =
      expenseOBJ.amount > 0 && typeof expenseOBJ.amount === "number";
    const isDateValid = expenseOBJ.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseOBJ.description.trim().length > 0;

    if (isAmountValid && isDescriptionValid && isDateValid) {
      onSubmit(expenseOBJ);
    } else {
      setInputs((_prevValues) => {
        return {
          amount: { value: _prevValues.amount.value, isValid: isAmountValid },
          date: { value: _prevValues.date.value, isValid: isDateValid },
          description: {
            value: _prevValues.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
    }
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}>مخارج تو</Text>
        <View style={styles.inputsRow}>
          <Input
            label="قیمت"
            style={styles.rowInput}
            isInvalid={!inputs.amount.isValid}
            inputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputHandler.bind(this, "amount"),
              value: inputs.amount.value,
            }}
          />
          <Input
            label="تاریخ"
            style={styles.rowInput}
            isInvalid={!inputs.date.isValid}
            inputConfig={{
              placeholder: "YYYY-MM-DD",
              keyboardType: "decimal-pad",
              maxLength: 10,
              onChangeText: inputHandler.bind(this, "date"),
              value: inputs.date.value,
            }}
          />
        </View>
        <Input
          label="توضیخات"
          isInvalid={!inputs.description.isValid}
          inputConfig={{
            multiline: true,
            autoCorrect: false,
            onChangeText: inputHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
        {(!inputs.amount.isValid ||
          !inputs.date.isValid ||
          !inputs.description.isValid) && (
          <Text style={styles.invalidText}>
            مقادیر نامعتبر است لطفا مجددا بررسی کنید
          </Text>
        )}
        <View style={styles.buttons}>
          <BTN style={styles.button} mode="flat" onPress={onCancel}>
            انصراف
          </BTN>
          <BTN style={styles.button} onPress={submitHandler}>
            {submitLabel}
          </BTN>
        </View>
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
  button: {
    minWidth: 120,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  invalidText: {
    color: GlobalStyles.colors.error500,
    textAlign: "right",
    fontFamily: "samim",
    fontSize: 15,
    marginRight: 8,
    marginBottom: 10,
  },
});
