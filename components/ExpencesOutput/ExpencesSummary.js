import { View, Text, StyleSheet} from "react-native"
import { GlobalStyles } from "../../constants";

const ExpencesSummary = ({expenses, periodName}) => {
    const expencesSum = expenses?.reduce((sum, expence) => {
        return sum + expence.amount;
    }, 0)


    return <View style={styles.container}>
        <Text style={styles.sum}>{periodName}</Text>
        <Text style={styles.period}>${expenses ? expencesSum.toFixed(2) : 0}</Text>
    </View>
}
export default ExpencesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary200,
        borderRadius: 9,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    period: {
        fontSize: 13,
        color: GlobalStyles.colors.primary50,
        fontWeight: "700"
    },
    sum: {
        fontSize: 17,
        fontWeight: "700",
        color: GlobalStyles.colors.primary600
    }
})