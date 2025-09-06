import { StyleSheet, Text, View } from "react-native";
import Input from "./input";
import GlobalStyles from "../../constants/colors";
import BTN from "../ui/btn";
import { Controller, useForm } from "react-hook-form";

const ExpenseForm = ({ submitLabel, onCancel, onSubmit, defaultValues }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      amount: defaultValues ? defaultValues.amount.toString() : "",
      description: defaultValues ? defaultValues.description : "",
      date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    },
  });

  const submitHandler = (data) => {
    const expenseOBJ = {
      amount: +data.amount,
      date: new Date(data.date),
      description: data.description,
    };

    onSubmit(expenseOBJ);
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}>مخارج تو</Text>
        <View style={styles.inputsRow}>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: true,
              pattern: /^(?:[1-9][0-9]*|[۱-۹][۰-۹]*)$/,
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  label="قیمت"
                  isInvalid={errors.amount}
                  style={styles.rowInput}
                  inputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: onChange,
                    value: value,
                  }}
                />
              );
            }}
          />
          <Controller
            name="date"
            control={control}
            rules={{
              required: true,
              pattern:
                /^([0-9\u06F0-\u06F9]{4})-(0[1-9]|1[0-2]|۰[۱-۹]|۱[۰-۲])-(0[1-9]|[12][0-9]|3[01]|۰[۱-۹]|[۱۲][۰-۹]|۳[۰-۱])$/,
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  label="تاریخ"
                  isInvalid={errors.date}
                  style={styles.rowInput}
                  inputConfig={{
                    placeholder: "YYYY-MM-DD",
                    keyboardType: "decimal-pad",
                    maxLength: 10,
                    onChangeText: onChange,
                    value: value,
                  }}
                />
              );
            }}
          />
        </View>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                label="توضیخات"
                isInvalid={errors.description}
                inputConfig={{
                  multiline: true,
                  autoCorrect: false,
                  onChangeText: onChange,
                  value: value,
                }}
              />
            );
          }}
        />
        {(errors.amount || errors.date || errors.description) && (
          <Text style={styles.invalidText}>
            مقادیر نامعتبر است لطفا مجددا بررسی کنید
          </Text>
        )}
        <View style={styles.buttons}>
          <BTN style={styles.button} mode="flat" onPress={onCancel}>
            انصراف
          </BTN>
          <BTN style={styles.button} onPress={handleSubmit(submitHandler)}>
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
