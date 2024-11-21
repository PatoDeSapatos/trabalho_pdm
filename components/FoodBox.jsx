import { Text, TouchableOpacity, View } from "react-native";


export default (props) => {
    const {food, index, removeFood} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        removeFood(index);
    }

    return(
        <View>
            <Text>{food.name}</Text>
            <Text>{food.quantity}</Text>

            <TouchableOpacity onPress={onClickHandler}>
                <Text>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}