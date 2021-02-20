import styled from "styled-components";
export const GalleryGrid = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(autofit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 24px;
  width: calc(100vw - 72px);
  max-width: calc(100vw - 72px);
  height: 100vh;
  grid-auto-flow: dense;
  z-index: 1;
`;

export const GalleryItem = styled.div`
  grid-row: span 1;
  grid-column: span 1;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  cursor: pointer;
  &:nth-of-type(3n) {
    grid-column: span 2;
  }
  &:nth-of-type(5n) {
    grid-row: span 2;
  }
`;

export const GalleryItemFooter = styled.div`
  padding: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 0;
  display: flex;
  border-radius: 48px;
  flex: 0 0 calc(100% - 16px);
  flex-wrap: wrap;
  margin: 8px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  ${GalleryItem}:hover & {
    background-color: rgba(0, 0, 0, 0.9);
    height: min-content;
    padding: 2px 0;
  }
`;

export const PhotoLabel = styled.p`
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 100%;
  line-height: 1.2em;
  margin: 4px 0;
  color: rgba(255, 255, 255, 0.8);
`;

export const PhotoDate = styled(PhotoLabel)`
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.5);
`;

export const Modal = styled.div`
  width: ${(props) => (props.open ? "calc(100% - 80px)" : "0%")};
  height: ${(props) => (props.open ? "100vh" : "0vh")};
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  padding: ${(props) => (props.open ? "40px" : "0")};
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  color: #fafafa;
  font-size: ${(props) => (props.open ? "2rem" : "0.1rem")};
  display: inline-block;
  background: transparent;
  border: none;
  width: ${(props) => (props.open ? "auto" : "0px")};
  height: ${(props) => (props.open ? "auto" : "0px")};
`;

export const ModalImage = styled.div`
  flex: 0 1 800px;
  min-height: ${(props) => (props.open ? "80%" : "0px")};
  background-image: url(${(props) => props.src});
  height: ${(props) => (props.open ? "auto" : "0px")};
  background-size: contain;
  background-repeat: no-repeat;
  justify-self: center;
  background-position: center;
  transition: all 0.7s ease;
  z-index: 20;
`;

export const ModalFooter = styled.div`
  display: grid;
  flex: 0 0 100%;
  grid-template-rows: 70px;
  grid-template-columns: repeat(1fr, 7);
  grid-gap: 24px;
  min-height: 200px;
  width: 100%;
  margin-top: 2rem;
`;

export const ModalThumb = styled.div`
  grid-column: span 1;
  grid-row: 1;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active ? "0 0 0 10px rgba(59, 76, 200, 1)" : ""};
  &:hover {
    transform: scale(1.1);
  }
`;
