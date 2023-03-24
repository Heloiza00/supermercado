import { FlatList, Image, Text, View,} from "react-native";
import Produto from "./Produto";


const ListaProdutos = (props) => {
    return (
         <View>
            <FlatList
                 horizontal={true}
                 showsHorizontalScrollIndicator={true} 
                 data={props.produtos}
                 renderItem={
                    ({item}) => (
                        <Produto p={item} />
                    )
                 }
            />
         </View>
    );
}

export default ListaProdutos;