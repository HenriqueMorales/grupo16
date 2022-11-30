import React from "react";

const Post = ({
  postTable,
  setPostTable,
  handlePostSubmit,
  setValue1,
  setValue2,
  setValue3,
  setValue4,
  setValue5,
  setValue6,
}) => {
  return (
    <form className="form-post" onSubmit={handlePostSubmit}>
      <h2>Inserir dados em determinada tabela:</h2>
      <label>Tabela:</label>
      <select onChange={(e) => setPostTable(e.target.value)}>
        <option>Pessoa</option>
        <option>Vendedor</option>
        <option>Telefone</option>
        <option>Produto</option>
        <option>Carrinho</option>
        <option>itensCarrinho</option>
        <option>Compra</option>
      </select>

      {postTable == "Pessoa" && (
        <div>
          <label>CPF:</label>
          <input
            type="number"
            maxLength={11}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>Nome:</label>
          <input
            type="text"
            maxLength={30}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <label>email:</label>
          <input
            type="text"
            maxLength={50}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />

          <label>Senha:</label>
          <input
            type="password"
            maxLength={30}
            onChange={(e) => {
              setValue4(e.target.value);
            }}
          />

          <label>DataNasc:</label>
          <input
            type="date"
            onChange={(e) => {
              setValue5(e.target.value);
            }}
          />

          <label>Endereço:</label>
          <input
            type="text"
            maxLength={50}
            onChange={(e) => {
              setValue6(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "Vendedor" && (
        <div>
          <label>codVend:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>CPF:</label>
          <input
            type="number"
            maxLength={11}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "Telefone" && (
        <div>
          <label>CPF:</label>
          <input
            type="number"
            maxLength={11}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>numTelefone:</label>
          <input
            type="number"
            maxLength={15}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "Produto" && (
        <div>
          <label>idProduto:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>codVend:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <label>nomeProd:</label>
          <input
            type="text"
            maxLength={20}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />

          <label>valorProd:</label>
          <input
            type="number"
            maxLength={10}
            onChange={(e) => {
              setValue4(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "Carrinho" && (
        <div>
          <label>idCarrinho:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>valorCarrinho:</label>
          <input
            type="number"
            maxLength={10}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <label>CPF:</label>
          <input
            type="number"
            maxLength={11}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "itensCarrinho" && (
        <div>
          <label>nomeProd:</label>
          <input
            type="text"
            maxLength={20}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>idProduto:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <label>idCarrinho:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />
        </div>
      )}

      {postTable == "Compra" && (
        <div>
          <label>numPedido:</label>
          <input
            type="number"
            maxLength={5}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          />

          <label>enderecoEntrega:</label>
          <input
            type="number"
            maxLength={10}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <label className="label-compra">
            PIX:
            <input
              type="radio"
              name="formaDePag"
              value="PIX"
              onChange={(e) => {
                setValue3(e.target.value);
              }}
            />
          </label>
          <label className="label-compra">
            CARTAO:
            <input
              type="radio"
              name="formaDePag"
              value="CARTAO"
              onChange={(e) => {
                setValue4(e.target.value);
              }}
            />
          </label>
        </div>
      )}

      <button type="submit">Enviar Dados</button>
    </form>
  );
};

export default Post;
