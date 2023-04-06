import {View, Pressable, Text, StyleSheet} from "react-native"
import { GlobalStyles } from "../constants";
import { formattedDate } from "../util/dates";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";


const ExpenceItem = ({id, description, amount, date}) => {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate("ManageExpanse", {
            expenceId: id,
            data: {
                date: date,
                description: description,
                amount: amount
            }
        })
    }
    return (
        <Pressable onPress={onPressHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.item}>
                <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{formattedDate(date)}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}
export default ExpenceItem;

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 9,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        elevation: 3,
        shadowColor: "#fff",
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 3}
    },
    textBase: {
       color: GlobalStyles.colors.primary50,

    },
    description: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "700"
    },
    priceContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 15,
        minWidth: 80,
        alignItems: "center",
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "700"
    },
    pressed:{
        opacity: 0.7
    }
})