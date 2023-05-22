import styled, { css } from 'styled-components';
import cards from '../cards';
import seta from '../assets/seta_virar.png';
import { useState } from 'react';
import error from '../assets/icone_erro.png';
import almost from '../assets/icone_quase.png';
import correct from '../assets/icone_certo.png';
import play from '../assets/seta_play.png'

export default function FlashCards(props) {
  const { selectedCard, setSelectedCard, answeredCount, setAnsweredCount } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredCards, setAnsweredCards] = useState([]);

  const handleCardClick = (card) => {
    if (selectedCard === card) {
      setShowAnswer(!showAnswer);
    } else {
      setSelectedCard(card);
      setShowAnswer(false);
    }
  };

  const handleAnswerButtonClick = (card, answerStatus) => {
    const answeredCard = {
      card,
      answerStatus,
    };

    setAnsweredCards([...answeredCards, answeredCard]);
    setSelectedCard(null);
    setAnsweredCount(answeredCount + 1);
  };

  const switchDataTest = (answerStatus) => {
    switch (answerStatus) {
      case 'correct':
        return "zap-btn";
      case 'incorrect':
        return "no-btn";
      case 'effort':
        return "partial-btn";
      default:
        return "play-btn";
    }
  };

  return (
    <>
      {cards.map((card, index) => {
        const isAnswered = answeredCards.some((answeredCard) => answeredCard.card === card);
        const answeredCard = answeredCards.find((answeredCard) => answeredCard.card === card);
        const answerStatus = answeredCard ? answeredCard.answerStatus : null;

        return (
          <Card data-test = "flashcard" key={index} flipped={selectedCard === card} answered={isAnswered} answerStatus={answerStatus}>
            {selectedCard === card ? (
              <>
                {showAnswer ? (
                  <div className='answer'>
                    <h1 data-test = "flashcard-text"> {card.answer}</h1>
                    <div>
                      <button data-test = "no-btn" onClick={() => handleAnswerButtonClick(card, 'incorrect')}>
                        <img src={error} alt="Error icon" />
                        <h2>Não lembrei</h2>
                      </button>
                      <button data-test = "partial-btn"onClick={() => handleAnswerButtonClick(card, 'effort')}>
                        <img src={almost} alt="Almost icon" />
                        <h2>Quase não lembrei</h2>
                      </button>
                      <button data-test = "zap-btn" onClick={() => handleAnswerButtonClick(card, 'correct')}>
                        <img src={correct} alt="Correct icon" />
                        <h2>Zap!</h2>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 data-test = "flashcard-text">{card.question}</h1>
                    <img data-test = "turn-btn" src={seta} alt="Show answer" onClick={() => handleCardClick(card)} />
                  </>
                )}
              </>
            ) : (
              <>
                <h1 data-test = "flashcard-text" className={isAnswered ? answerStatus : ''}>{`Pergunta ${index + 1}`}</h1>
                <img
                  src={isAnswered ? (answerStatus === 'incorrect' ? error : answerStatus === 'effort' ? almost : correct) : play}
                  data-test={switchDataTest(answerStatus)}
                  alt="Play button"
                  onClick={() => handleCardClick(card)}
                  disabled={isAnswered}
                />
              </>
            )}
          </Card>
        );
      })}
    </>
  );
}

const Card = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 80px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    border-radius: 5px;
    width: 85px;
    height: 45px;
  }

  .answer {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  h2 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }

  ${({ flipped }) =>
    flipped &&
    css`
      min-height: 131px;
      background: #ffffd5;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 7px;
        margin-top: 10px;
      }

      h1 {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        margin-top: 10px;
      }

      button:nth-child(1) {
        background-color: #ff3030;
      }

      button:nth-child(2) {
        background-color: #ff922e;
      }

      button:nth-child(3) {
        background-color: #2fbe34;
      }
    `}

  ${({ answered, answerStatus}) =>
    answered &&
    css`
      pointer-events: none;

      h1 {
        text-decoration: line-through;
        color: ${({ answerStatus }) => {
          if (answerStatus === 'incorrect') return '#ff3030';
          if (answerStatus === 'effort') return '#ff922e';
          if (answerStatus === 'correct') return '#2fbe34';
          return 'inherit';
        }};
      }
    `}
`;
