import { StyleSheet, Text, View } from "react-native";

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
        <View style={styles.box}>
            <Text style={styles.info}>{values["name"]} - {values["serving_size_g"]}g</Text>
            <Text style={styles.info}>Calories: {values["calories"]}</Text>
            <Text style={styles.info}>Carbohydrates: {values["carbohydrates_total_g"]}g</Text>
            <Text style={styles.info}>Protein: {values["protein_g"]}g</Text>
            <Text style={styles.info}>Fat: {values["fat_total_g"]}g</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8, 
        backgroundColor: '#ffddff',
        padding: 24, 
        minWidth: 240,
    },
    info: {
        fontSize: 16,
        textTransform: 'capitalize'
    },
})