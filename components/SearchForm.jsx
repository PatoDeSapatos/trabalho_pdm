import { Text } from "react-native-web"
import { Food } from "../domain/Food";

const SearchForm = (props) => {
    const {foodList, setFoodList, setPage} = props;
    const newFood = new Food("", "");

    const onChangeHandler = (e) => {
        const value = e.target.value;

        switch(e.target.name) {
            case "n":
                newFood["name"] = value;
                break;
            case "q":
                newFood["quantity"] = value;
                break;
        }
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        const foodListCopy = [... foodList];
        if (newFood.name == "" || newFood.quantity == "" || typeof newFood.quantity === 'number' || newFood.quantity <= 0) return;

        foodListCopy.push(newFood);
        setFoodList(foodListCopy);

        document.querySelector("#food-quantity").value = "";
        document.querySelector("#food-name").value = "";
        setPage('1');
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="food-name"><Text> Name: </Text></label>
                    <input onChange={onChangeHandler} name="n" type="text" id="food-name" />
                </div>

                <div>
                    <label htmlFor="food-quantity"><Text> Quantity (g): </Text></label>
                    <input onChange={onChangeHandler} name="q" type="number" id="food-quantity" />
                </div>

                <button onClick={onClickHandler}>Add</button>
            </form>
        </>
    )
}

export default SearchForm;