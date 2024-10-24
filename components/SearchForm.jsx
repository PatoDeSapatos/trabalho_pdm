import { Text } from "react-native-web"

const SearchForm = (props) => {
    const {setSearchFood} = props;

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearchFood(e.target.value);
    }

    return (
        <>
            <form>
                <label htmlFor="search-food"><Text> Comida: </Text></label>
                <input onChange={onChangeHandler} type="text" id="search-food" />
                <button>Pesquisar</button>
            </form>
        </>
    )
}

export default SearchForm;