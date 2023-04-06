import { View, Text, TextInput, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants";

const Input = ({label, invalid, textInputConfig, style}) => {

    const inputStyles = [styles.input, invalid && styles.inputError]

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.label, invalid && styles.labelError]}>
                {label}
            </Text>
        <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 10
    },
    label: {
        fontSize: 12,
        color: "#fff",
        marginBottom: 5,
        fontWeight: "700"
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 8,
        borderRadius: 6,
        fontSize: 16,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight: 100,
        textAlign: "top"
    },
    labelError:{
        color: GlobalStyles.colors.error500,
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1
    },
    inputError: {
        backgroundColor: GlobalStyles.colors.error50
    }
})