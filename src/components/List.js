import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import SubHeading from "./layout/SubHeading";

export default function List() {
  return (
    <>
      <Container>
        <SubHeading title="Top 4 coins" />
        <ListGroup>
          <ListGroup.Item className="text-center">Cardano(ADA)</ListGroup.Item>
          <ListGroup.Item className="text-center">Ethereum(ETH)</ListGroup.Item>
          <ListGroup.Item className="text-center">Dogecoin(DOGE)</ListGroup.Item>
          <ListGroup.Item className="text-center">Bitcoin(BTC)</ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}
