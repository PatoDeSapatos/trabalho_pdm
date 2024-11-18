export default (props) => {
    const {data, total} = props;

    if (total) {
        return(
            <div>
                {/* <p>Total - {data["serving_size_g"]}g</p>
                <p>Calories: {data["calories"]}</p>
                <p>Carbohydrates: {data["carbohydrates_total_g"]}g</p>
                <p>Protein: {data["protein_g"]}g</p>
                <p>Fat: {data["fat_total_g"]}g</p> */}
            </div>
        )
    } else {
        return(
            <div>
                <p>{data["name"]} - {data["serving_size_g"]}g</p>
                <p>Calories: {data["calories"]}</p>
                <p>Carbohydrates: {data["carbohydrates_total_g"]}g</p>
                <p>Protein: {data["protein_g"]}g</p>
                <p>Fat: {data["fat_total_g"]}g</p>
            </div>
        )
    }
}