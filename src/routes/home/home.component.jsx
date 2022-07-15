import Quote from "../../components/quote/quote.component";
import { QuoteContext } from "../../context/quote.context";
import { useContext } from 'react';
import Loader from '../../components/loader/loader.component'

function Home(){
    const {isError,quote}=useContext(QuoteContext);
    return(
        <>
        {
            isError?
            <h1 className="Warning">Pleas Try Again Later!</h1>:
            quote
            ?(<>
                <span className="space"></span>
                <Quote {...quote}/>
            </>)
            :<Loader/>
        }
        </>
    );
}
export default Home;