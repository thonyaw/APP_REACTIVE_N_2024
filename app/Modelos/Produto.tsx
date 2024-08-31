enum categoria{
    "ração",
    "brinquedos"
}

interface Produto{
    id:number,
    nome:string,
    descricao:string,
    foto:string,
    preco:number,
    categoria: categoria
}

export default Produto