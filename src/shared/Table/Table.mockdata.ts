export interface Produto{
   id: number
   nome: string
   preco: number
   estoque: number
}

const Produtos: Produto[] =[
   {
      id:1,
      nome:'bala',
      preco: 2.34,
      estoque: 20
   },
   {
      id:2,
      nome:'sorvete',
      preco: 12.34,
      estoque: 200
   },
   {
      id:3,
      nome:'doce',
      preco: 5.04,
      estoque: 230
   },
   {
      id:4,
      nome:'amendoim',
      preco: 67.34,
      estoque: 90
   },
   {
      id:5,
      nome:'macarão',
      preco: 4.34,
      estoque: 30
   },
   {
      id:6,
      nome:'chocolate',
      preco: 33.89,
      estoque: 56
   },
   {
      id:7,
      nome:'maça',
      preco: 3.64,
      estoque: 330
   },
   {
      id:8,
      nome:'melancia',
      preco: 27.34,
      estoque: 320
   },
   {
      id:9,
      nome:'frango',
      preco: 56.34,
      estoque: 50
   },
   {
      id:10,
      nome:'biscoito',
      preco: 8.34,
      estoque: 239
   }
]
export default Produtos