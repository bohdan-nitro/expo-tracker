import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const ErrorOverlay = ({message, onConfirm}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>
                Error occured
            </Text>
            <Text style={styles.text}>{message}</Text>
            <CustomButton onPress={onConfirm}>Okey</CustomButton>
        </View>
    )
}
export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#000"
    },
    text: {
        color: "white",
        textAlign: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 22,
        fontWeight: "700"
    },
})