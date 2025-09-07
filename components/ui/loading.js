import { ActivityIndicator, StyleSheet, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const Loading = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#e67300" />
      </View>
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary50,
  },
});
