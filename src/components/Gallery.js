import React from "react";
import { Image, Figure } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const images = [
  { id: 1, imageName: "ada.jpg", caption: "How far can it go?" },
  { id: 2, imageName: "eth.jpg", caption: "Will it reach $10000?" },
  { id: 3, imageName: "doge.jpg", caption: 'DOGE - AKA "shitcoin"' },
  { id: 4, imageName: "bitcoin.jpg", caption: 'The bears are strong' },
];

export default function Gallery() {
  return (
    <>
      <Container>
        <div className="image-gallery">
          {images.map((image) => (
            <div key={images.id} className="image-card">
              <Image
                src={`/images/${image.imageName}`}
                alt={`${image.imageName}`}
                rounded
                className="gallery-image"
              />
              <Figure.Caption>{`${image.caption}`}</Figure.Caption>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
