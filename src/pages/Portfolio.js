import React from "react";
import { ListGroup } from "react-bootstrap";
import Gallery from "../components/Gallery";
import List from "../components/List";
import Heading from "../components/layout/Heading";

export default function Portfolio() {
  return (
    <React.Fragment>
      <Heading title="Portfolio" />
      <Gallery />
      <List />
    </React.Fragment>
  );
}
