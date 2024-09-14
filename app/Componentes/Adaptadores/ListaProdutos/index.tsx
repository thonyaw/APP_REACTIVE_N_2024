import React from "react";
import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import estilo from "@/app/Estilos/Default";
import Produto from "@/app/Modelos/Produto";

interface PropListaProduto {
    produtos: Produto[];
    aoAtualizar?: Function
}

const ListaProdutos: React.FC<PropListaProduto> = ({ produtos, aoAtualizar }) => {
    return (<ScrollView>
        <View style={estilo.container}>
            {produtos.map((p) => <ItemProduto produto={p} key={p.id} aoExcluir={() => { aoAtualizar?.call(null) }}></ItemProduto>)}
        </View></ScrollView>)
}

export default ListaProdutos