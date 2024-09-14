import { StyleSheet, Text, View } from 'react-native';
import AddFood from './components/AddFood/AddFood';
import { useEffect, useState } from 'react';
import ChangePage from './components/ChangePage';
import ViewFoods from './components/ViewFood/ViewFoods';
import { Food } from './classes/Food';

export default function App() {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState()
  const [foods, setFoods] = useState([new Food("https://www.estadao.com.br/resizer/v2/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg?quality=80&auth=c4f56563b2c83e506971bce35dbc505a5ecdf7d89a70d2f2c5fbb8b0c7071e5f&width=720&height=503&smart=true", "Hamburguer", "Mt gostoso hmmm"), new Food("https://www.sabornamesa.com.br/media/k2/items/cache/665e96c29d55b13435d7a8d39deafe53_XL.jpg", "Macarronada", "Mt gostoso também hmmm")]);
  
  const addFood = (food) => {
    let arrayCopy = [];
    arrayCopy = arrayCopy.concat(foods);
    console.log(arrayCopy);

    arrayCopy.push(food);
    setFoods(arrayCopy);
  }

  useEffect(() => {
    if (page == 0) {
      setComponent(<AddFood addFood={addFood}/>);
    } else {
      setComponent(<ViewFoods foods={foods}/>);
    }
  }, [page]);

  return (
    <View style={styles.wrapper}>
      <h1 style={styles.title}>Comidas</h1>

      <ChangePage page={page} setPage={setPage} />
      {component}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100vw",
    position: "relative",
    overflow: 'scroll',
    backgroundColor: '#CC010A',
  },

  title: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Roboto-Medium"
  }
});
