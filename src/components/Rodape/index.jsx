import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
        cursor: pointer;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <img src="/imagens/sociais/facebook@2x.svg" alt="Facebook" />
                </li>
                <li>
                    <img src="/imagens/sociais/twitter@2x.svg" alt="Twitter" />
                </li>
                <li>
                    <img src="/imagens/sociais/instagram@2x.svg" alt="Instagram" />
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Driely Santos.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
