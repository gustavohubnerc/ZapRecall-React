import styled from 'styled-components'

export default function Footer(props) {
    const { answeredCount, totalCardCount } = props;
  
    return (
      <Completed>
        <h1>{`${answeredCount}/${totalCardCount} Concluídos`}</h1>
      </Completed>
    );
  }
  
  const Completed = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 45px;
    width: 100%;
    height: 70px;
    background: #ffffff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  
    h1 {
      width: 145px;
      height: 22px;
      font-family: 'Recursive';
      font-weight: 400;
      font-size: 18px;
      color: #333333;
    }
`;