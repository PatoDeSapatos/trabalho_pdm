import { MouseEventHandler, useContext } from "react";
import { StyleSheet, TextInput } from "react-native";
import { FoodContext } from "../../App";


export default (props) => {
    const {food, setFood} = props;
    const addFood = useContext(FoodContext);

    const save = (e) => {
        e.preventDefault();
        addFood(food);  
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target;
        const foodCopy = {
            ...food
        }

        foodCopy[input.id] = input.value;

        setFood(foodCopy);
    }

    return(
        <>
            <form style={style.wrapper}>
                <div style={style.fields}>
                    <label htmlFor="image">Imagem: </label>
                    <input style={style.input} onChange={onChangeHandler} type="text" id="image"/>
                </div>

                <div style={style.fields}>
                    <label htmlFor="name">Nome: </label>
                    <input style={style.input} onChange={onChangeHandler} type="text" id="name"/>
                </div>

                <div style={style.fields}>
                    <label htmlFor="desc">Descrição: </label>
                    <TextInput multiline = {true} numberOfLines = {4} style={style.textarea} onChange={onChangeHandler} id="desc"/>
                </div>

                <button onClick={save}>Salvar</button>
            </form>
        </>
    )
}

const style = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
        backgroundColor: "#72B800",
        width: "100%",
        paddingTop: "1em",
        paddingBottom: "1em"
    },

    fields: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontSize: "1.1em",
        color: "#fff",
        fontWeight: "800",
        gap: ".5em"
    },

    input: {
        width: "70%",
        padding: ".5em",
        fontSize: "1.1em"
    },

    textarea: { 
        backgroundColor: "#fff",
        width: "70%"
    },

});