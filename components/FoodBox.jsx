import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default (props) => {
    const {food, index, removeFood} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        removeFood(index);
    }

    return(
        <View style={styles.box}>
            <Text style={styles.info}>Name: {food.name}</Text>
            <Text style={styles.info}>Quantity: {food.quantity}g</Text>

            <TouchableOpacity onPress={onClickHandler} style={styles.remove}>
                <Text style={[styles.info, styles.remove]}>Remove</Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10, // Approximate value for spacing (adjust as needed)
        backgroundColor: '#ffddff',
        padding: 24, // 1.5em is roughly 24px
        minWidth: 240, // 15em is roughly 240px
        borderRadius: 15 // Keep as is, since it's already in number format
    },
    info: {
        fontSize: 20 // 1.25em is roughly 20px
    },
    remove: {
        padding: 8, // Adjusted from 3px for better touch target
        borderRadius: 5, // Keep as is
        backgroundColor: '#ee82ee',
        color: 'white',
        width: "100%",
        textAlign: 'center'
    }
});