import React from "react";
import "./Table.scss";
import Produtos from "./Table.mockdata";


const Headers = [
   { key: 'nome', value:'Produto'},
   { key: 'preco', value:'Preço'},
   { key: 'estoque', value:'Estoque'},
]

const Table = () => {
  return  <table className="AppTable">
    <thead>
       <tr>
          {
            Headers.map(header => <th key={header.key}>{ header.value }</th>)
          }
       </tr>
    </thead>

    <tbody>
      {
         Produtos.map( produto =>
            <tr>
               <td> { produto.nome } </td>
               <td> { produto.preco } </td>
               <td className="right"> { produto.estoque } </td>
            </tr>
         )
      }
    </tbody>
  </table>;
};
export default Table;
