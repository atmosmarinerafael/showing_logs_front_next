import styled from "styled-components";

export const ServerComponentStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:1rem;
    border: solid 1px #000000;
    border-radius: 10px;
    background-color: #D3D3D3;
    padding:1rem;

    h1 {
        font-size: 2rem;
        font-weight: 800;
        margin-top: 1rem;

    }
` 

export const ContainerTitleAndDate = styled.div`
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerTasks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`

export const TaskTag = styled.div`
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px 0;
    
`

export const BoxProcess = styled.div`
    height: 7rem;
    width: 14rem;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.5rem;
    color: #fff;

    p{
        font-weight: 600;
    }

    span {
        margin-left: 3px;
    }

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`