import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
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
        <View style={styles.container}>
            <View>
                <Text style={styles.label} aria-label="Label for food-name" nativeID="food-name"> Name: </Text>
                <TextInput style={styles.input} aria-label="input" aria-labelledby="food-name" onChange={nameChange} />
            </View>

            <View>
                <Text style={styles.label} aria-label="Label for food-quantity" nativeID="food-quantity"> Quantity (g): </Text>
                <TextInput style={styles.input} aria-label="input" aria-labelledby="food-quantity" keyboardType="numeric" onChange={quantityChange} />
            </View >

            <TouchableOpacity onPress={onClickHandler} style={styles.add}>
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16 // This can be adjusted as needed (1em is roughly 16px)
    },
    add : {
        backgroundColor: '#ee82ee',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#666',
        elevation: 3,
        shadowColor: '#007B9A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    addText: {
        color : '#fff',
        textAlign: 'center'
    },
    label: {
        fontSize: 24, // Assuming 1.5em is around 24px
        width: '100%',
        textAlign: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1, // This is already in number format
        borderRadius: 5, // Assuming 5px is the same as 5
        fontSize: 19, // Assuming 1.2em is around 19px
        padding: 5, // This is already in number format
    }
});


export default SearchForm;