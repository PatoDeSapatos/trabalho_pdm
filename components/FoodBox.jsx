import { Text } from "react-native-web";

export default (props) => {
    const {food} = props;

    return (
        <>
            <div>
                <h2>Visualização</h2>
                <div>Imagem: <img src={food.photo} alt={food.name} /></div>
                <div>Nome: {food.name}</div>
                <div>Descrição: {food.desc}</div>
            </div>
        </>
    )
}