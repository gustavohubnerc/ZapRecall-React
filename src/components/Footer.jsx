import styled from 'styled-components'

export default function Footer() {
    return (
        <Concluidos>
            <h1>0/4 Concluídos</h1>
        </Concluidos>
    );
}

const Concluidos = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
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
`