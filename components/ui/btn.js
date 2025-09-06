import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/colors";

const BTN = ({ children, onPress, mode, style }) => {
  return (
    <>
      <View style={style}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View style={[styles.button, mode === "flat" && styles.flat]}>
            <Text
              style={[styles.buttonText, mode === "flat" && styles.flatText]}
            >
              {children}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default BTN;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
  },
  buttonText: {
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    fontFamily: "samim",
  },
  flatText: {
    color: GlobalStyles.colors.primary50,
    fontFamily: "samim",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
