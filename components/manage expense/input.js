import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Input = ({ label, style, inputConfig, isInvalid }) => {
  return (
    <>
      <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, isInvalid && styles.invalidLabel]}>
          {label}
        </Text>
        <TextInput
          style={[
            styles.input,
            isInvalid && styles.invalidInput,
            inputConfig && inputConfig.multiline && styles.inputMultiline,
          ]}
          {...inputConfig}
        />
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontFamily: "samim",
    fontSize: 16,
    textAlign: "right",
    color: GlobalStyles.colors.gray500,
    marginBottom: 6,
    marginRight: 8,
  },
  input: {
    fontFamily: "samim",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
    padding: 10,
    color: GlobalStyles.colors.gray500,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary100
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.error500,
  },
});
