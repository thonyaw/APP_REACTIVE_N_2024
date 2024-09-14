import estilo from "@/app/Estilos/Default";
import Produto from "@/app/Modelos/Produto";
import axios from "axios";
import { Text, View, Image, Button, Alert } from "react-native"

interface PropProd {
    produto: Produto,
    aoExcluir?: Function
}

const ItemProduto: React.FC<PropProd> = ({ produto, aoExcluir }) => {
    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`)
            .then((resp) => {
                aoExcluir?.call(null);
                Alert.alert('Produto excluido com sucesso');
                alert('Produto excluido com sucesso');
            })
    }

    return (
        <View style={estilo.card}>
            <Text style={estilo.cardText}>{produto.nome}</Text>
            <Text style={estilo.cardText}>{produto.preco}</Text>
            <Image source={{ uri: produto.foto }} style={estilo.imagem} />
            <Button title="Excluir" onPress={() => { Excluir(produto.id) }}></Button>
        </View>
    )
}

export default ItemProduto