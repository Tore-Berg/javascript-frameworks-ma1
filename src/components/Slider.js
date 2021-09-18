import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Coding from './assets/coding.jpg';
import Blockchain from './assets/blockchain.jpg'
import Blockchain_2 from './assets/blockchain_2.jpg'

export default function Slider() {
    return (
      <Container>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Coding}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Blockchain}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Blockchain_2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>
    )
}
