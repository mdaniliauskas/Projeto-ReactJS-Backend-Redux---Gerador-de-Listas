import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';



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
        <Col sm={4}>
          <h3>Gerador de listas</h3>


          <Form onSubmit={alterarTitulo}>
            <Form.Label><i>Nome da sua lista:</i></Form.Label><br />
            <Form.Control placeholder="Ex: Lista de compras ou Mercado, Tarefas, Convidados, Chá de bebê da Marisa, etc." value={inputTitulo} onChange={atribuiTitulo} />      
                      
            <button class="btn btn-primary">Enviar</button>              
          </Form>
        <br />

          <Form onSubmit={adicionarItem}>
          <Form.Label><i>Item a ser incluso:</i></Form.Label><br />
            <Form.Control placeholder="Digite um item da sua lista" value={inputItem} onChange={atribuiItem} />
                      
            <button class="btn btn-primary">Incluir</button>
            {/* <button class="btn btn-secondary" type="reset">Limpar</button> */}

            <br />
          </Form>

          <br />
          <hr />
        </Col>

        <Col sm={8}>
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
