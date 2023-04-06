import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants";

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={"white"}/>
        </View>
    )
}
export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    }
})