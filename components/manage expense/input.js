import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Input = ({ label, style, inputConfig }) => {
  return (
    <>
      <View style={[styles.inputContainer, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={[
            styles.input,
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
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
