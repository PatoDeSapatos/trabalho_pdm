import { Text, View } from "react-native";

export default (props) => {
    const {data, total} = props;
    let values = data;
    
    if (total) {
        values = data.reduce((acc, food) => {
            const newAcc = {
                ...acc
            }

            newAcc["calories"] +=food.calories;
            newAcc["serving_size_g"] += food["serving_size_g"];
            newAcc["carbohydrates_total_g"] += food["carbohydrates_total_g"];
            newAcc["protein_g"] += food["protein_g"];
            newAcc["fat_total_g"] += food["fat_total_g"];

            return newAcc;
        }, {
            "name": "Meal",
            "calories": 0,
            "serving_size_g": 0,
            "carbohydrates_total_g": 0,
            "protein_g": 0,
            "fat_total_g": 0
        })
        console.log(values);
    }

    return(
        <View>
            <Text>{values["name"]} - {values["serving_size_g"]}g</Text>
            <Text>Calories: {values["calories"]}</Text>
            <Text>Carbohydrates: {values["carbohydrates_total_g"]}g</Text>
            <Text>Protein: {values["protein_g"]}g</Text>
            <Text>Fat: {values["fat_total_g"]}g</Text>
        </View>
    )
}