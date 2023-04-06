import { FlatList, View, Text} from "react-native";
import ExpenceItem from "../ExpenceItem";

const ExpencesList = ({expenses}) => {
    const renderItem = (item) => {
        return <ExpenceItem {...item.item}/>
    }

    return <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item) => item.id}/>
}
export default ExpencesList;