import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { useContext, useEffect, useState, useCallback } from "react";
import { ExpensesContext } from "../store/expence-context";
import { getMinusDays } from "../util/dates";
import { getExpence } from "../util/http";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../components/ui/Loader";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const RecentExpnasiesScreen = () => {
    const userContext = useContext(ExpensesContext);
    const [expenceData, setExpenceData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    useFocusEffect(
        useCallback(() => {
            async function callExpences(){
                setIsLoading(true)
                try {
                const expences = await getExpence();
                userContext.setExpences(expences)
                setExpenceData(expences)
                } catch (error) {
                    setError("Could not fetch data")
                }
                setIsLoading(false)
             }
             callExpences()
            
        }, [])
    )

    const recentExpenses = expenceData.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getMinusDays(today, 7);
    
        return expense.date >= date7DaysAgo && expense.date <= today;
      });

      const errorHandler = () => {
        setError(null)
      }

      if(error && !isLoading){
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
      }
   
    return (
        isLoading ? <Loader/> : <ExpencesOutput 
        expenses={recentExpenses} 
        expencesPeriod={"Last 7 days"} 
        fallbackText={"No registered expences for 7 days"}/>
    )
}
export default RecentExpnasiesScreen;