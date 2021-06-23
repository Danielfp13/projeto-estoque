import React from "react";
import "./Table.scss";

const Table = () => {
  return  <table className="AppTable">
    <thead>
       <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th className="right">Estoque</th>
       </tr>
    </thead>

    <tbody>
       <tr>
          <td>Biscoito</td>
          <td>R$2,00</td>
          <td className="right">22</td>
       </tr>
       <tr>
          <td>Biscoito</td>
          <td>R$2,00</td>
          <td className="right">22</td>
       </tr>
       <tr>
          <td>Biscoito</td>
          <td>R$2,00</td>
          <td className="right">22</td>
       </tr>
    </tbody>
  </table>;
};
export default Table;
