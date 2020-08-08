import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Card,
  CardTitle,
  CardText
} from "reactstrap";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <Card body style={{ height: "25vh" }}>
      <CardTitle>
        <h3>Add New Transactions</h3>
      </CardTitle>
      <form onSubmit={onSubmit}>
        <InputGroup style={{ margin: "5px" }}>
          <Input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter transaction name..."
          />
        </InputGroup>
        <InputGroup style={{ margin: "5px" }}>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </InputGroup>

        <Button color="success" style={{ margin: "5px" }}>
          Add Transaction
        </Button>
      </form>
    </Card>
  );
};
