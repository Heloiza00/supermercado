import React, {Component} from "react";
import { Text, View, Button, StyleSheet, Image} from "react-native";


class Produto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qtd: 0,
            total: 0,
            adicionado: false
        };
    }

    addProduto() {
        this.setState({
            qtd: this.state.qtd +1,
            total: this.state.total + this.props.p.preco
        });
        this.props.valorFinal(this.props.p.preco);
        
    }
    render() {
        return (
            <View style={styles.container}> 
              <Image 
                  source={this.props.p.img} 
                  style={styles.imgProduto} />
              <Text>Nome: {this.props.p.nome}</Text>
              <Text>R$ {this.props.p.preco}</Text> 
              <Text>Quantidade:{this.state.qtd}</Text>
              <Text>Total:{this.state.total}</Text>
              <Button
                 onPress={this.addProduto.bind(this)}
                 title={this.state.adicionado ? 'Adicionado' : 'Adicionar'}/>
           </View>
        )
    }
}

export default Produto;

const styles = StyleSheet.create({
    imgProduto: {
        width: 50, 
        height: 50, 
          
    },
    container: {
                fontWeight: 'bold',
                color: 'blue',
                textAlign: 'center',
                borderRadius: 8 ,
                marginBottom: 5,
                width: 200,
                height: 200,
                backgroundColor: 'skyblue',
                padding: 18, 
                margin: 4,
                
    }
  });
