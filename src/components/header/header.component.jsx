import { ReloadIcon, RandomButton, HeaderCont } from './header.style';
import { QuoteContext } from "../../context/quote.context";
import { useContext } from 'react';
import { useNavigate } from 'react-router';


function Header(){
    const navigate=useNavigate();
    const {reload}=useContext(QuoteContext);
    return(
        <HeaderCont>
            <RandomButton onClick={()=>{
                navigate("/");
                reload();
            }}>
                <span>random</span>
                <ReloadIcon/>
            </RandomButton>
        </HeaderCont>
    )
}
export default Header;