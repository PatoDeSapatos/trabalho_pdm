import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
    const foodListCopy = [...foodList];
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
    return (<View style={styles.container}> <Text style={styles.loadingText}>Loading...</Text> </View>);
  }

  switch (page) {
    case '0':
      return ( 
        <View style={styles.container}>
          <Text style={styles.headerText}>Add a food to your list!</Text>
          <SearchForm foodList={foodList} setFoodList={setFoodList} setPage={setPage} />
        </View>
      );    
    case '1':
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => setPage('0')}>
            <Text style={styles.buttonText}>Add More Foods</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onClickHandler}>
            <Text style={styles.buttonText}>Check Calories!</Text>
          </TouchableOpacity>

          <View style={styles.foodWrapper}>
            {foodList.map((food, key) => {
              return ( <FoodBox food={food} key={key} index={key} removeFood={removeFood} /> );
            })}
          </View>
        </View>
      );
    case '3':
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => {
            setPage('0');
            setFoodList([]);
          }
          } >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <View style={styles.meal}>
            <View>
              <Text style={styles.foodBoxText}>Meal: </Text>
              <DataBox data={resultList} total={true} />
            </View>

            <View>
              <Text style={styles.foodBoxText}>Ingredients: </Text>

              <View style={styles.foodWrapper}>
                {resultList.map((data, key) => {
                  return (<DataBox data={data} key={key} />);
                })}
              </View>
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    overflow: 'scroll',
  },
  headerText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#123456',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  loadingText: {
    fontSize: 20,
    color: '#ff6347',
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    
  },
  foodBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    width: '100%',
    elevation: 5,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  foodBoxText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center'
  },
  foodWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em'
  },
  meal: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
