import styled from "styled-components";
import { FcRight } from "react-icons/fc";

export const QuoteText=styled.h1`
    max-width: 615px;
    font-size: 2rem;
    font-weight:500;
    color: black;
    line-height:2.45rem;
    position: relative;
    right: -25px;
    margin-block: 0;
    &::after{
        content: " ";
        position: absolute;
        top:0;
        left:-125px;
        width: 8px;
        height: 100%;
        background: #e0b943;
        border-radius:5px;
    }
`;

export const AuthorName=styled.h2`
    font-size:1.4rem;
    font-weight:700;
    color: #4F4F4F;
    position: relative;
    &::after{
        font-weight: 500;
        content:'${({genre})=>genre}';
        position: absolute;
        display: block;
        top:calc(100% + 8px);
        left: 0;
        font-size: .78rem;
        color: #828282;
    }
`;

export const RightArrow=styled(FcRight)`
    width: 30.33px;
    height: auto;
    & *{
        fill: white;
    }
`;

export const QuoteInfo=styled.div`
    cursor: pointer;
    width: 100%;
    margin: 75px 0 10px;
    background-color: #fafafa;
    box-sizing: border-box;
    padding: 50px 40px 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    :hover{
        background-color: #333333;
        ${AuthorName}{
            color: #F2F2F2;
        }
    }
`;

export const QuoteCont=styled.div`
    max-width: 675px;
    width: 90%;
    display: block;
    margin:35px auto 140px auto;
    position: relative;
    @media screen and (max-width:975px) {
        margin:0px auto 100px auto;
        ${QuoteText}{
            max-width:unset;
            right: unset;
            text-align: center;
            &::after{
                all: unset;
                content: "";
                width: 100%;
                margin-top:35px;
                height:8px;
                display: block;
                background: #e0b943;
                border-radius:5px;
            }
        }
        ${QuoteInfo}{
            margin-top: 35px;
            padding:15px 30px 30px;
        }
    }
    @media screen and (max-width:775px) {
        ${QuoteText}{
            font-size:1.65rem;
        }
    }
    @media screen and (max-width:575px) {
        ${QuoteText}{
            font-size:1.35rem;
        }
    }
`;