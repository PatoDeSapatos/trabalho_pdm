import { StyleSheet, Text } from "react-native";
import FoodBox from "../FoodBox";

export default (props) => {
    const {foods} = props;

    if (foods.length <= 0) {
        return (
            <Text>Nenhuma comida adicionada ainda.</Text>
        );
    }

    return(
        <>
            <div style={style.foodlist}>
                {foods.map((f, key) => {
                    return <FoodBox food={f} key={key}/>
                })}
            </div>
        </>
    )
}

const style = StyleSheet.create({
    foodlist: {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#72B800"
    }
});