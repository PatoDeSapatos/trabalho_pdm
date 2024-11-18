import { Text } from "react-native";

export default (props) => {
    const {food, index, removeFood} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        removeFood(index);
    }

    return(
        <div>
            <Text>{food.name}</Text>
            <Text>{food.quantity}</Text>
            <button onClick={onClickHandler}>Remove</button>
        </div>
    )
}