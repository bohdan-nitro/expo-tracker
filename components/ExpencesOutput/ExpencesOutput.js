import { View, StyleSheet, Text } from "react-native";
import ExpencesList from "./ExpencesList";
import ExpencesSummary from "./ExpencesSummary";

const ExpencesOutput = ({expenses, expencesPeriod, fallbackText}) => {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if(expenses?.length > 0) {
        content = <ExpencesList expenses={expenses}/>
    }

    return <View style={styles.container}>
        <ExpencesSummary expenses={expenses} periodName={expencesPeriod}/>
        {content}
    </View>
}
export default ExpencesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: "#000",
        flex: 1
    },
    infoText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "700",
        alignItems: "center",
        textAlign: "center"
    }
})