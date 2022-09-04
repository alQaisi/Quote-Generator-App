import Quote from "../../components/quote/quote.component";
import { QuoteContext } from "../../context/quote.context";
import { useContext, Fragment } from 'react';
import Loader from '../../components/loader/loader.component'

function Home(){
    const {isError,quote}=useContext(QuoteContext);
    document.title ="Quote Generator";
    if(isError)
        return <h1 className="Warning">Pleas Try Again Later!</h1>;
    if(!quote)
        return <Loader/>
    return(
        <Fragment>
            <span className="space"></span>
            <Quote {...quote}/>
        </Fragment>
    );
}
export default Home;