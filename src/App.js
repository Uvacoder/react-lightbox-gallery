import "./styles.css";
import React, { useState, useCallback, useEffect } from "react";
import {
  GalleryGrid,
  GalleryItem,
  GalleryItemFooter,
  PhotoLabel,
  PhotoDate,
  Modal,
  ModalClose,
  ModalImage,
  ModalFooter,
  ModalThumb
} from "./components";
import { images } from "./images";
import styled, { keyframes } from "styled-components";

const fadeout = keyframes`
0% {
  opacity: 1;
}

70% {
  opacity: 1;
}

100% {
  opacity: 0;
}
`;

const FloatingAlert = styled.p`
  display: ${(props) => (props.alert ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.7);
  z-index: 30;
  padding: 12px;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeout} 4s ease;
  animation-fill-mode: forwards;
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const handleClick = (index) => {
    console.log(index);
    setActiveImage(index);
    setIsOpen(true);
    setAlert(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="App">
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleClick(index)}
          >
            <GalleryItemFooter>
              <PhotoLabel>{image.alt}</PhotoLabel>
              <PhotoDate>
                {image.date} – {image.location}
              </PhotoDate>
            </GalleryItemFooter>
          </GalleryItem>
        ))}
      </GalleryGrid>
      <Modal open={isOpen} onC>
        <FloatingAlert alert={alert}>
          Press <strong>Escape</strong> to close
        </FloatingAlert>
        <ModalImage src={images[activeImage].src} open={isOpen} />
        <ModalClose onClick={handleClose} open={isOpen}>
          x
        </ModalClose>
        <ModalFooter>
          {images.map((image, index) => (
            <ModalThumb
              src={image.src}
              key={index}
              onClick={() => setActiveImage(index)}
              active={index === activeImage}
            />
          ))}
        </ModalFooter>
      </Modal>
    </div>
  );
}
