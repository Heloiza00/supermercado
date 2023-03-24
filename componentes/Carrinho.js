import React from "react";
import { Text, View } from "react-native";
import Produto from "./Produto";

const produto = [
    {img: require('../assets/feijao.jpg'),nome: 'Feijão', preco: 17},
    {img: require('../assets/arroz.jpg'),nome: 'Arroz', preco: 20},
    {img: require('../assets/acucar.jpg'),nome: 'Acucar', preco: 10},
];


class Carrinho extends React.Component{
    state = {
        valorTotal: 0
    };

    atualizarTotal(preco) {
        this.setState({
          valorTotal: this.state.valorTotal + preco
        });
    }
    
    qtdTotal(qtd){
        this.setState({
           qtdTotal: this.state.qtdTotal + qtd
        });
    }

    render() {
        return(
           <View>
             <Produto p={produto[0]} valorFinal={this.atualizarTotal.bind(this)} qtdTotal={this.qtdTotal.bind(this)} />
             <Produto p={produto[1]} valorFinal={this.atualizarTotal.bind(this)} qtdTotal={this.qtdTotal.bind(this)}/>
             <Produto p={produto[2]} valorFinal={this.atualizarTotal.bind(this)} qtdTotal={this.qtdTotal.bind(this)}/>
             <View > 
                <Text>
                Valor Final: R$
                <Text>{this.state.valorTotal}</Text>
                </Text>
             </View>
             
           </View>
        );
    }
}
export default Carrinho;



