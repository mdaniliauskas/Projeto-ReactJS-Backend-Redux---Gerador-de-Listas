import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Menu from "./components/Menu"
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [inputTitulo, setInputTitulo] = React.useState("");

  const [inputItem, setInputItem] = React.useState("");



  const item = useSelector((state) => state.itemReducer.item);

  const titulo = useSelector((state) => state.tituloReducer.titulo);


  const dispatch = useDispatch();


  function atribuiTitulo (event) {
    setInputTitulo(event.target.value)
  };

  function alterarTitulo (event) {
    event.preventDefault();    
    dispatch({type: "alterar", value: inputTitulo})
  };

  
  function atribuiItem (event) {
    setInputItem(event.target.value)   
  };


  function adicionarItem(event) {
    event.preventDefault();

    const listaItem = {
      item: inputItem
    };

    dispatch({type: "adicionar", value: listaItem});

  };
   

  return (
    <Container fluid="md">      
      <Row>
        <Col md="4">
          <hr />
          <h2>Gerador de listas</h2>


          <form onSubmit={alterarTitulo}>
            <label>Escolha um nome para sua lista:</label><br />
            <input placeholder="Ex: Lista de compras ou Mercado, Tarefas, Convidados, Chá de bebê da Marisa, etc." value={inputTitulo} onChange={atribuiTitulo} />      
                      
            <button>Enviar</button>              
          </form>


            <form onSubmit={adicionarItem}>
            <label>Escreva o item a ser adicionado na lista</label><br />
            <input placeholder="Digite um item da sua lista" value={inputItem} onChange={atribuiItem} />
                      
            <button>Enviar</button>
          </form>

          <br />
          <hr />
        </Col>

        <Col md="8">
          <h1>{titulo}</h1><br />         

          {item.map((item, index) => {
            return (
            <li key={index}>{item.item}</li>
            )})}
        </Col>

      </Row>

    </Container>
  );
}

export default App;
