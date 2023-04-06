import {StyleSheet, View} from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants";
import CustomButton from "../components/ui/CustomButton";
import { ExpensesContext } from "../store/expence-context";
import ExpenceForm from "../components/ManageExpence/ExpenceForm";
import { deleteExpence, storeExpence, updateExpence } from "../util/http";
import Loader from "../components/ui/Loader";


const ManageExpnasiesScreen = ({route, navigation}) => {
    const state = useContext(ExpensesContext)
    const itemId = route.params?.expenceId;
    const isEditing = !!itemId;

    const editingData = route.params?.data;

    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expence" : "Add Expence",
        })
    }, [isEditing])

    const onDeleteItem = () => {
        setIsLoading(true)
        deleteExpence(itemId)
        state.deleteExpence(itemId)
        navigation.goBack();
    }

    const onCancelItem = () => {
        navigation.goBack();
    }

    const onConfirm = async (expenceData) => {
        setIsLoading(true)
        if(isEditing){
            state.updateExpence(itemId,expenceData)
            await updateExpence(itemId, expenceData)
        } else {
            const id = await storeExpence(expenceData)
            state.addExpence({...expenceData, id: id})
        }
        navigation.goBack();
    }

    if(isLoading){
        return <Loader/>
    }

    return (
        <View style={styles.container}>
            <ExpenceForm editingData={editingData} onSubmit={onConfirm} onCancelItem={onCancelItem} isEditing={isEditing}/>
            
            {isEditing && 
            <View style={styles.deleteContainer}>
                <IconButton icon={"trash"} 
                size={24}  
                color={GlobalStyles.colors.error500}
                onPress={onDeleteItem}
                />
            </View>}
        </View>
    )
}
export default ManageExpnasiesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 24
    },
    deleteContainer: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.accent500,
        alignItems: "center"
    },
    
})