import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants";

const CustomButton = ({children, onPress, mode, style}) => {

    const styles = StyleSheet.create({
        buttonContainer: {
            borderRadius: 8,
            padding: 12,
            backgroundColor: "#42b883",
            marginHorizontal: 10
        },
        text: {
            color: "#fff",
            fontSize: 15,
            textAlign: "center"
        },
        flat: {
            backgroundColor: "transparent"
        },
        flatText: {
            color: "#fff"
        },
        pressed: {
            opacity: 0.9,
            backgroundColor: mode ? mode === "flat" && GlobalStyles.colors.primary200 : "#000",
            borderRadius: 10,
        }
    })
    
    return (
        <View style={style}>
            <Pressable style={({pressed}) => pressed && styles.pressed } onPress={onPress}>
                <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
                    <Text style={[styles.text, mode === "flat" && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CustomButton;

