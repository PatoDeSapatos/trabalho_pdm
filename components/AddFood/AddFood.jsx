import { useState } from "react";
import { Food } from "../../classes/Food";
import FoodForm from "./FoodForm";
import FoodBox from "../FoodBox";
import { StyleSheet } from "react-native";

export default (props) => {
    const [food, setFood] = useState(new Food("", "", ""));

    return(
        <>
            <div style={style.wrapper}>
                <FoodForm
                    food={food}
                    setFood={setFood}
                />

                <div>
                    <h2 style={style.title}>Visualização</h2>
                    <FoodBox food={food}/>
                </div>
            </div>
        </>
    )
}

const style = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    title: {
        width: "100%",
        textAlign: "center"
    },
});