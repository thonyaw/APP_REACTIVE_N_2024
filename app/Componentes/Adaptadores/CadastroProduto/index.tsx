import Produto from "@/app/Modelos/Produto"
import axios from "axios"
import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { setShouldAnimateExitingForTag } from "react-native-reanimated/lib/typescript/reanimated2/core"



const CadastroProduto = () => {
    let [nome, setNome] = useState('')
    let [descricao, setDescricao] = useState('')
    let [preco, setPreco] = useState(0.00)
    let [foto, setFoto] = useState('')
    return (
        <View>
            <Text>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>
            <Text>Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>
            <Text>Foto:</Text>
            <TextInput onChangeText={setFoto} value={foto}></TextInput>
            <Text>Preço:</Text>
            <TextInput onChangeText={
                (v) => {
                    setPreco(
                        isNaN(parseFloat(v)) ? 0 : parseFloat(v)
                    );
                }
            } inputMode="numeric" value={
                preco.toString()
            }></TextInput>
            <Button title='Cadastrar' onPress={Cadastrar}></Button>
        </View>
    )

    function Cadastrar() {
        let produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            foto: foto
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api, produto)
    }


}

export default CadastroProduto