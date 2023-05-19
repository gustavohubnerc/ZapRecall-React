import styled from "styled-components"
import logo from '../assets/logo.png'
export default function Header() {
    return(
        <Title>
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </Title>
    );
}

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 255px;
  height: 60px;
  
  img {
    width: 52px;
    height: 60px;
  }
  h1 {
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
  }

`

