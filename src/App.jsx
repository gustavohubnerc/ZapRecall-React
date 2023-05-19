import styled from 'styled-components'
import Header from './components/Header'
import FlashCards from './components/FlashCards'
import Footer from './components/Footer'
import { useState } from 'react'

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <Container>
        <Header />
        <FlashCards selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100vw;
  border-radius: 0px;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`


