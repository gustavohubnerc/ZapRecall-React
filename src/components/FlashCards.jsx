import styled, { css } from 'styled-components'
import cards from '../cards'
import play from '../assets/seta_play.png'
import seta from '../assets/seta_virar.png'
import { useState } from 'react'

export default function FlashCards(props) {
    const { selectedCard, setSelectedCard } = props;
    const [showAnswer, setShowAnswer] = useState(false);
  
    const handleCardClick = (card) => {
      if (selectedCard === card) {
        setShowAnswer(!showAnswer);
      } else {
        setSelectedCard(card);
        setShowAnswer(false);
      }
    };
  
    return (
      <>
        {cards.map((card, index) => (
          <Card key={index} flipped={selectedCard === card}>
            {selectedCard === card ? (
              <>
                {showAnswer ? (
                  <>
                    <h1>{card.answer}</h1>
                    <img src={seta} alt="Show answer" onClick={() => handleCardClick(null)} />
                  </>
                ) : (
                  <>
                    <h1>{card.question}</h1>
                    <img src={seta} alt="Show answer" onClick={() => handleCardClick(card)} />
                  </>
                )}
              </>
            ) : (
              <>
                <h1>{`Pergunta ${index + 1}`}</h1>
                <img src={play} alt="Play button" onClick={() => handleCardClick(card)} />
              </>
            )}
          </Card>
        ))}
      </>
    );
  }
  
  
  
const Card = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 25px;

    h1 {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    ${({ flipped }) =>
    flipped &&
    css`
      height: 131px;
      background: #FFFFD5;

      h1 {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      }
    `}
`

