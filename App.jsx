import { StyleSheet, Text, View } from 'react-native';
import SearchForm from './components/SearchForm';
import { useState } from 'react';
import { fetchFoods } from './interface/api';
import FoodBox from './components/FoodBox';
import PageNav from './components/PageNav';
import DataBox from './components/DataBox';

export default function App() {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("0");
  const [resultList, setResultList] = useState([]);

  const removeFood = (index) => {
    const foodListCopy = [... foodList];
    foodListCopy.splice(index, 1);
    setFoodList(foodListCopy);
  }

  const onClickHandler = async (e) => {
    e.preventDefault();
    const query = foodList.map((food) => {
      return food.quantity + "g" + " " + food.name;
    }).join(", ");
    
    setLoading(true);
    const res = await fetchFoods(query);
    setResultList(res["items"]);
    setPage('3');
    console.log(res["items"]);
    setLoading(false);
  }

  if (loading) {
    return (<Text id='loading'>Loading...</Text>)
  }

  switch (page) {
    case '0':
      return ( 
        <View style={styles.container}>
          <h1>Add a food to your list!</h1>
          <SearchForm
            foodList={foodList}
            setFoodList={setFoodList}
            setPage={setPage}
          />
        </View>
      );
    case '1':
      return (
        <View style={styles.container}>
          <PageNav page={page} setPage={setPage} text={"Add new food!"} value="0" />
          <button onClick={onClickHandler}>Send List</button>

          {foodList.map((food, key) => {
            return ( <FoodBox food={food} key={key} index={key} removeFood={removeFood} /> )
          })}
        </View>
      );
    case '3':
      return(
        <View style={styles.container}>
          <button onClick={() => setPage('0')}>Back</button>
          <DataBox data={resultList} total={true} />

          {resultList.map((data, key) => {
            return (<DataBox data={data} key={key} />)
          })}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
