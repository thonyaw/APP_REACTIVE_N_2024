import { useState } from "react";
import { View , StyleSheet, Button} from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios';
import { useEffect } from "react";

const produtos = [
  {id: 1, nome: "Schweppers", preco:5.5},
  {id: 2, nome: "Pepsi", preco:5.5},
  {id: 3, nome: "Guaraná Cruzeiro", preco:5.5},
  {id: 4, nome: "Guaraná Jesus", preco:5.5},
];

export default function Index() {

  let [counter,setCounter]= useState(0);
  let [produtos,setProdutos]= useState([]);

  useEffect(()=>{
    carregaProdutos();
  },[])

  function carregaProdutos(){
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
    .then((resp)=>{
      setProdutos(resp.data);
    })
  }

  return (

    <View style={estilo.container}
    >
      
      <ListaProdutos produtos={produtos}></ListaProdutos>
      
      <Button title={counter.toString()} onPress={()=>{clickButton()}}></Button>
      
    </View>
  );

  function clickButton(){
    setCounter(counter+1)
  }

}

const estilo= StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#0c0a0e",
        paddingStart: 40,
  },
  text:{
    color:"#fc0377",
    fontSize: 24,
    fontFamily: "chiller",
  },
  title:{
    color: "#17ff70",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "chiller",
  }
});