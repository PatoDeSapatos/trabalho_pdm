import { StyleSheet } from "react-native";

export default (props) => {
    const {food} = props;

    return (
        <>
            <div style={boxStyle.foodbox}>
                
                <div style={boxStyle.figure}><img style={boxStyle.image} src={food.image} alt={food.name} /></div>
                
                <div style={boxStyle.fields}>
                    <div style={boxStyle.section}><span style={boxStyle.bold}>Nome: </span>{food.name}</div>
                    <div style={boxStyle.section}><span style={boxStyle.bold}>Descrição: </span>{food.desc}</div>
                </div>
            </div>
        </>
    )
}

const boxStyle = StyleSheet.create({
    foodbox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.1em",
        fontFamily: "Roboto Regular",
        backgroundColor: "#189E01",
        borderRadius: "5px",
        width: "450px",
        maxWidth: "100vw",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },

    figure: {
        width: "100%",
        maxHeight: "250px",
        minHeight: "100px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        width: '100%',
        height: 'auto'
    },

    fields: {
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },

    section: {
        textAlign: "center",
    },

    bold: {
        fontWeight: "700",
    }
});