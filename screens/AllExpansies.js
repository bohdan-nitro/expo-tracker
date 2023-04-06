import {Text, View} from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expence-context";

const AllExpnasiesScreen = () => {
    const userContext = useContext(ExpensesContext)
    return (
        <ExpencesOutput 
        expenses={userContext.expenses} 
        expencesPeriod={"Total"}
        fallbackText={"No regitered expence found"}
        />
    )
}
export default AllExpnasiesScreen;
