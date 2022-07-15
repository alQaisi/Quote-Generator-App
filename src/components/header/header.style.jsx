import styled from "styled-components";
import {FiRefreshCw} from "react-icons/fi"

export const ReloadIcon=styled(FiRefreshCw)`
    width: 17px;
    margin-left: 11px;
    position: relative;
    top: 3px;
    color:#333333;
`;

export const RandomButton=styled.div`
    width: fit-content;
    cursor: pointer;
    & span{
        font-size: 1rem;
    }
    &::after{
        content: " ";
        position: relative;
        display: block;
        width:0;
        margin: 5px 0 0;
        height: 4px;
        border-radius: 15px;
        background-color: #e0b943;
        transition: width .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    &:hover::after{
        width: 100%;
    }
`;

export const HeaderCont=styled.div`
    color: #333333;
    padding:30px 100px 24px 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;  
    @media screen and (max-width:580px) {
        padding:25px 35px 25px 35px;
    }
`;