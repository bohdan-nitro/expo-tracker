import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Input from "./Input";
import CustomButton from "../ui/CustomButton";
import moment from "moment";
import { formattedDate } from "../../util/dates";


const ExpenceForm = ({onCancelItem, onSubmit, isEditing, editingData}) => {
    const [inputValue, setInputValue] = useState({
        amount: {
        value: isEditing ? `${editingData.amount}` : "", 
        isValid: true
    },
        description: {
            value: isEditing ? editingData.description : "", 
            isValid: true
        },
        date: {
            value: isEditing ? formattedDate(editingData.date) : "", 
            isValid: true
        }
    });



    const onSubmitHandler = () => {
        const expenceData = {
            amount: +inputValue.amount.value,
            date: new Date(inputValue.date.value),
            description: inputValue.description.value
        }

        const isValidAmount = !isNaN(expenceData.amount) && expenceData.amount > 0;
        const dateIsValid = expenceData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenceData.description.trim().length > 0;
        if(!isValidAmount || !dateIsValid || !descriptionIsValid){
            setInputValue(currentInputs => {
               return {
                amount: {value: currentInputs.amount.value, isValid: isValidAmount},
                date: {value: currentInputs.date.value, isValid: dateIsValid},
                description: {value: currentInputs.description.value, isValid: descriptionIsValid}
               }
            })
           
            return;
        } else {
            onSubmit(expenceData)
        }

        
       
    }

    function inputChangeHandler(inputIndentifier, enteredValue){
        setInputValue((currentInput) => {
            return {
                ...currentInput,
                [inputIndentifier]: {value: enteredValue, isValid: true}
            }
        })

    }

    const checkFormErros = 
    !inputValue.amount.isValid ||
    !inputValue.date.isValid ||
    !inputValue.description.isValid
    return (
        <View style={{marginTop: 15}}>
            <View style={styles.row}>
            <Input style={styles.inputRow} invalid={!inputValue.amount.isValid} label={"Amount"} textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: inputChangeHandler.bind(this, "amount"),
                value: inputValue.amount.value
            }}/>
            <Input style={styles.inputRow} invalid={!inputValue.date.isValid} label={"Date"} textInputConfig={{
                placeholder: "YYYY-MM-DD",
                maxLength: 10,
                onChangeText: inputChangeHandler.bind(this, "date"),
                value: inputValue.date.value
            }}/>
            </View>
            
            <Input label={"Description"} invalid={!inputValue.description.isValid} textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, "description"),
                value: inputValue.description.value
            }}/>
            {/* {checkFormErros && <Text style={{color: "red", fontSize: 16, fontWeight: "bold"}}>Incorrect input values</Text>} */}
            <View style={styles.buttonsContainer}>
                <CustomButton style={styles.button} mode={"flat"} onPress={onCancelItem}>
                    Cancel
                </CustomButton>
                <CustomButton onPress={onSubmitHandler} style={styles.button}>{isEditing ? "Update" : "Add"}</CustomButton>
            </View>
        </View>
    )
}
export default ExpenceForm;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputRow: {
        flex: 1
    },
    buttonsContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 5
    }
})