import estilo from "@/app/Estilos/Default";
import { Text, View } from "react-native"

function ItemProduto({produto}: {produto:{id:number,nome:string, preco:number}}){
    return(
        <View style={estilo.card}>
                <Text style={estilo.cardText}>{produto.nome}</Text>
                <Text style={estilo.cardText}>{produto.preco}</Text>
        </View>
    )
}

export default ItemProduto