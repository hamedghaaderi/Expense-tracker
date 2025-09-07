import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";
import BTN from "./btn";

const Error = ({ message, onConfirm }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>مشکلی به وجود آمده است</Text>
        <Text style={[styles.text, styles.message]}>{message}</Text>
        <BTN onPress={onConfirm} style={styles.button}>
          تلاش مجدد
        </BTN>
      </View>
    </>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "samim",
  },
  title: {
    fontSize: 20,
    color: GlobalStyles.colors.error500,
  },
  message: {
    fontSize: 15,
    color: GlobalStyles.colors.gray500,
  },
  button: {
    marginTop: 5,
  },
});
