import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios';
import { useEffect } from "react";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";
import { useRouter, useFocusEffect } from "expo-router";

export default function Index() {

  const router = useRouter();

  useFocusEffect(() => {
    carregaProdutos();
  })
  
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregaProdutos();
  }, [])

  function carregaProdutos() {
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp) => {
        setProdutos(resp.data);
      })
  }

  return (

    <View style={estilo.container}
    >

      <ListaProdutos produtos={produtos} aoAtualizar={carregaProdutos}></ListaProdutos>
      <Button title="Cadastrar" onPress={() => { telaCadastro() }}></Button>

    </View>
  );

  function telaCadastro() {
    router.push('/Telas/cadastro')
  }

}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    paddingStart: 40,
  },
  text: {
    color: "#fc0377",
    fontSize: 24,
    fontFamily: "chiller",
  },
  title: {
    color: "#17ff70",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "chiller",
  }
});