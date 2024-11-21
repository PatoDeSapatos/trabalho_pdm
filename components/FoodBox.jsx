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
        gap: 10, 
        backgroundColor: '#ffddff',
        padding: 24, 
        minWidth: 240,
    },
    info: {
        fontSize: 20 
    },
    remove: {
        padding: 8, 
        borderRadius: 5, 
        backgroundColor: '#ee82ee',
        color: 'white',
        width: "100%",
        textAlign: 'center'
    }
});