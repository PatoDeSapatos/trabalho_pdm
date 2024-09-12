import { useState } from "react";
import { Food } from "../../classes/Food";
import FoodForm from "./FoodForm";
import FoodBox from "../FoodBox";

export default () => {
    const [food, setFood] = useState(new Food("", ""));

    return(
        <>
        <FoodForm
            food={food}
            setFood={setFood}
        />

        <FoodBox food={food}/>
        </>
    )
}