import React from "react";

const Get = ({ setGetTable, handleGetSubmit }) => {
  return (
    <form className="form-get" onSubmit={handleGetSubmit}>
      <h2>Ver dados de determinada tabela:</h2>

      <label>Tabela:</label>
      <select onChange={(e) => setGetTable(e.target.value)}>
        <option>Pessoa</option>
        <option>Vendedor</option>
        <option>Telefone</option>
        <option>Produto</option>
        <option>Carrinho</option>
        <option>itensCarrinho</option>
        <option>Compra</option>
      </select>

      <button type="submit">Ver dados</button>
    </form>
  );
};

export default Get;
