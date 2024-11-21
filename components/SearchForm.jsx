import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Food } from "../domain/Food";

const SearchForm = (props) => {
    const {foodList, setFoodList, setPage} = props;
    const newFood = new Food("", "");

    const nameChange = (e) => {
        const value = e.nativeEvent.text;
        newFood["name"] = value;
    }

    const quantityChange = (e) => {
        const value = e.nativeEvent.text;
        newFood["quantity"] = value;
    }

    const onClickHandler = (e) => {
        e.preventDefault();

        const foodListCopy = [...foodList];
        if (newFood.name === "" || newFood.quantity === "" || isNaN(newFood.quantity) || newFood.quantity <= 0) return;

        foodListCopy.push(newFood);
        setFoodList(foodListCopy);

        setPage('1');
    }

    return (
        <View>
            <View>
                <Text aria-label="Label for food-name" nativeID="food-name"> Name: </Text>
                <TextInput aria-label="input" aria-labelledby="food-name" onChange={nameChange} />
            </View>

            <View>
                <Text aria-label="Label for food-quantity" nativeID="food-quantity"> Quantity (g): </Text>
                <TextInput aria-label="input" aria-labelledby="food-quantity" keyboardType="numeric" onChange={quantityChange} />
            </View>

            <TouchableOpacity onPress={onClickHandler}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SearchForm;