import { StyleSheet, Text, View } from 'react-native';
import Carrinho from './componentes/Carrinho';
import Produto from './componentes/Produto';
import ListaProdutos from './componentes/ListaProdutos';
import Catalogo from './componentes/Catalogo';

const produto = [
  {img: require('./assets/feijao.jpg'),nome: 'Feijão', preco: 17},
  {img: require('./assets/arroz.jpg'),nome: 'Arroz', preco: 20},
  {img: require('./assets/acucar.jpg'),nome: 'Acucar', preco: 10},
];


export default function App() {
  return (
    <View>
      <Text 
      >Carros</Text>
      < Produto />
    </View>
  );
}

// export default function App() {
//   return (
//     <View >
//       {/* <Carrinho styles={styles.container} /> */}

//     </View>
//   );
// }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'yellow', 
        backgroundColor: 'gray',
        width: '100%',
        textAlign: 'center',
        padding: 10,
    },
    view: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    borderColor: 'red',
    marginBottom: 5,
    width: 200,
    height: 150,
    backgroundColor: 'skyblue',
    padding: 18,
  }, 
  
  });

