import React, {useState} from 'react';
import './App.css';
import Icon from './components/Icon';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import { ToastContainer } from 'react-toastify';


const reloadGame = () => {
  //
}

const checkIsWinner = () => {
  //
}

const changeItem = (itemNumber) => { // we dont need round braces here to pass the variable 'itemNumber', since it is only one variable, we could have done that without the round braces as well.
  //
}

const itemArray = new Array(9).fill("empty"); // this creates an array of size 9, names itemArray, where every index is filled with the string "empty"
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
