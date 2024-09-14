import { StyleSheet } from "react-native";

export default (props) => {
    const {page, setPage} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        setPage(e.target.value);
    }

    const getButtonStyle = (value) => {
        if (page == value) return style.selectedPage;
        return style.button;
    }

    return(
        <>
            <div style={style.wrapper}>
                <button onClick={onClickHandler} value={0} style={getButtonStyle(0)}>Adicionar</button>
                <button onClick={onClickHandler} value={1} style={getButtonStyle(1)}>Ver</button>
            </div>
        </>
    )
}

const style = StyleSheet.create({
    wrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
    },

    selectedPage: {
        width: "100%",
        padding: "1em",
        paddingLeft: "0",
        paddingRight: "0",
        borderRadius: "0",
        border: "none",
        backgroundColor: "#189E01",
        color: "white",
        cursor: "pointer"
    },

    button: {
        width: "100%",
        padding: ".5em",
        borderRadius: "0",
        border: "none",
        backgroundColor: "#72B800",
        color: "white",
        cursor: "pointer"
    }
});