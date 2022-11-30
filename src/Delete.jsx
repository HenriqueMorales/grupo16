import React from "react";

const Delete = ({ setDeleteTable, setDeleteTableId, handleDeleteSubmit }) => {
  return (
    <form className="form-delete" onSubmit={handleDeleteSubmit}>
      <h2>Excluir determinada tabela:</h2>

      <label>Tabela:</label>
      <select onChange={(e) => setDeleteTable(e.target.value)}>
        <option>Pessoa</option>
        <option>Vendedor</option>
        <option>Telefone</option>
        <option>Produto</option>
        <option>Carrinho</option>
        <option>itensCarrinho</option>
        <option>Compra</option>
      </select>

      <label>Chave Primária:</label>
      <input
        type="number"
        maxLength={11}
        onChange={(e) => {
          setDeleteTableId(e.target.value);
        }}
      />

      <button type="submit">Excluir Tabela</button>
    </form>
  );
};

export default Delete;
