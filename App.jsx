import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchForm from './components/SearchForm';
import { useEffect, useState } from 'react';
import { getFood, getToken } from './interface/api';

export default function App() {
  const [searchFood, setSearchFood] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = getToken();
    setToken(token);
  }, []);

  // useEffect(() => {
  //   getFood(searchFood, token);
  // }, [searchFood]);

  return (
    <View style={styles.container}>
      <SearchForm
        searchFood={searchFood}
        setSearchFood={setSearchFood}
      />

      <Text> {searchFood} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
