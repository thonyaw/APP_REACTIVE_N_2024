import estilo from "@/app/Estilos/Default";
import Produto from "@/app/Modelos/Produto";
import { Text, View, Image } from "react-native"

interface PropProd{
    produto:Produto,
}

const ItemProduto:React.FC<PropProd> = ({produto})=> {
    return(
        <View style={estilo.card}>
                <Text style={estilo.cardText}>{produto.nome}</Text>
                <Text style={estilo.cardText}>{produto.preco}</Text>
                <Image source={{uri:produto.foto}} style={estilo.imagem}/>
        </View>
    )
}

export default ItemProduto