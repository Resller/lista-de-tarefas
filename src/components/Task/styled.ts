import styled from "styled-components";
type props = {
    done:boolean
}
export const AreaTask = styled.div<props>`
    width: 100%;
    padding: 10px;
    border:solid 1px #555;
    display: flex;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    background-color: #20212C;

    input{
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    .txt{
        flex:1;
        color:#CCC;
        font-size:20px;
        font-weight: 600;
        text-decoration: ${props=>props.done?'line-through':'initial'};
    }
    .remove{
        cursor: pointer;
        display: flex;
    }
`