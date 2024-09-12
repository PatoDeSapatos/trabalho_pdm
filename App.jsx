import { StyleSheet, Text, View } from 'react-native';
import AddFood from './components/AddFood/AddFood';
import { useEffect, useState } from 'react';
import ViewFood from './components/ViewFood/ViewFood';
import ChangePage from './components/ChangePage';

export default function App() {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState()
  
  useEffect(() => {
    if (page == 0) {
      setComponent(<AddFood/>);
    } else {
      setComponent(<ViewFood/>);
    }
  }, [page]);

  return (
    <View style={styles.container}>
      <h1>Comidas</h1>
      <ChangePage page={page} setPage={setPage} />
      {component}
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
