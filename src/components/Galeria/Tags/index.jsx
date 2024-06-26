import styled from "styled-components"
import tags from "./tags.json"

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: end;
    gap: 24px;
`

const BarraTags = styled.div`
display: flex;
align-items: center;
gap: 64px;
margin-top: 56px;
`

const Tags = ({ setTag }) =>{
    return (
        <BarraTags>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
            </Div>
        </BarraTags>
    )
}

export default Tags