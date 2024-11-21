import { Text, TouchableOpacity, View } from "react-native";

export default (props) => {
    const {page, setPage, text, value} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        setPage(e.target.name);
    }

    return (
        <View>
            <TouchableOpacity onPress={onClickHandler}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}