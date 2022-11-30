import { useState } from "react";
import axios from "axios";
import "./style.css";
import Post from "./Post";
import Get from "./Get";
import Delete from "./Delete";

function App() {
  const [data, setData] = useState([]);

  const [getTable, setGetTable] = useState("Pessoa");
  const [postTable, setPostTable] = useState("Pessoa");
  const [deleteTable, setDeleteTable] = useState("Pessoa");
  const [deleteTableId, setDeleteTableId] = useState("");
  const [query, setQuery] = useState("");

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const fetch = async () => {
    try {
      const { data } = await axios.get(
        `https://grupo16-pbd.herokuapp.com/api/get/${getTable}`
      );
      setData((prevValue) => data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const post = async () => {
    try {
      const { data } = await axios.post(
        `https://grupo16-pbd.herokuapp.com/api/post/${postTable}`,
        {
          value1: value1,
          value2: value2,
          value3: value3,
          value4: value4,
          value5: value5,
          value6: value6,
        }
      );
      setData((prevValue) => data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `https://grupo16-pbd.herokuapp.com/delete/${deleteTable}/${deleteTableId}`
      );
      setData((prevValue) => data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleQuery = async () => {
    try {
      const { data } = await axios.get(
        `https://grupo16-pbd.herokuapp.com/api/${query}`
      );
      setData((prevValue) => data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleGetSubmit = (e) => {
    e.preventDefault();
    fetch();
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    post();
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    handleDelete();
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    handleQuery();
  };

  return (
    <div className="App">
      <header>
        <h1>Grupo 16 - PBD</h1>
        <p>Henrique Morales e Bruno Gabriel Soares</p>
      </header>

      <Get setGetTable={setGetTable} handleGetSubmit={handleGetSubmit} />

      {console.log(data)}

      <section>
        <h2>Dados:</h2>
        {typeof data !== undefined &&
          data.map((table) =>
            Object.entries(table).map(([key, value]) => {
              return (
                <div key={key}>
                  {console.log("Chave: " + key)}
                  {console.log("Valor: " + table[key])}
                  <p>Chave: {key}</p>
                  <p>Valor: {value}</p>
                </div>
              );
            })
          )}
      </section>

      <form className="form-query" onSubmit={handleQuerySubmit}>
        <h2>Consultas Prontas:</h2>

        <label>
          SELECT nome, numPedido FROM compra INNER JOIN pessoa on compra.cpf =
          pessoa.cpf;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nome, numPedido FROM Compra INNER JOIN Pessoa on Compra.cpf = Pessoa.cpf"
            )
          }
        >
          Consultar
        </button>

        <label>
          SELECT nome, numTelefone FROM Telefone INNER JOIN Pessoa on
          Telefone.cpf = pessoa.cpf;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nome, numTelefone FROM Telefone INNER JOIN Pessoa on Telefone.cpf = Pessoa.cpf;"
            )
          }
        >
          Consultar
        </button>

        <label>
          SELECT nome, numPedido, idCarrinho FROM Compra INNER JOIN Pessoa on
          compra.cpf = pessoa.cpf;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nome, numPedido, idCarrinho FROM Compra INNER JOIN Pessoa on compra.cpf = pessoa.cpf;"
            )
          }
        >
          Consultar
        </button>

        <label>
          SELECT nome, numPedido, numTelefone FROM Compra INNER JOIN Pessoa on
          compra.cpf = pessoa.cpf JOIN Telefone on compra.cpf = Telefone.cpf;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nome, numPedido, numTelefone FROM Compra INNER JOIN Pessoa on compra.cpf = pessoa.cpf JOIN Telefone on compra.cpf = Telefone.cpf;"
            )
          }
        >
          Consultar
        </button>

        <label>SELECT cpf from Pessoa order by cpf asc;</label>
        <button
          onClick={() => setQuery("SELECT cpf from Pessoa order by cpf asc;")}
        >
          Consultar
        </button>

        <label>
          SELECT nomeProd, idProduto, carrinho.idCarrinho, valorCarrinho,
          pessoa.cpf, nome, endereco from itensCarrinho inner join carrinho on
          carrinho.idCarrinho = itensCarrinho.idcarrinho inner join pessoa on
          pessoa.cpf = carrinho.cpf;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nomeProd, idProduto, carrinho.idCarrinho, valorCarrinho, pessoa.cpf, nome, endereco from itensCarrinho inner join carrinho on carrinho.idCarrinho = itensCarrinho.idcarrinho inner join pessoa on pessoa.cpf = carrinho.cpf;"
            )
          }
        >
          Consultar
        </button>

        <label>
          SELECT nomeProd, valorProd from produto order by nomeProd;
        </label>
        <button
          onClick={() =>
            setQuery(
              "SELECT nomeProd, valorProd from produto order by nomeProd;"
            )
          }
        >
          Consultar
        </button>
      </form>

      <Post
        postTable={postTable}
        setPostTable={setPostTable}
        handlePostSubmit={handlePostSubmit}
        setValue1={setValue1}
        setValue2={setValue2}
        setValue3={setValue3}
        setValue4={setValue4}
        setValue5={setValue5}
        setValue6={setValue6}
      />

      <Delete
        setDeleteTable={setDeleteTable}
        setDeleteTableId={setDeleteTableId}
        handleDeleteSubmit={handleDeleteSubmit}
      />
    </div>
  );
}

export default App;
