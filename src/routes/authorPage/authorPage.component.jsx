import Quote from "../../components/quote/quote.component";
import { useParams } from 'react-router';
import { useContext, useEffect, Fragment } from "react";
import { AuthorContext } from '../../context/author.context';
import Loader from '../../components/loader/loader.component'

function AuthorPage(){
    const {author,setAuthor,authorQuotes,isError}=useContext(AuthorContext);

    const {authorName}=useParams();
    useEffect(function(){
        setAuthor(authorName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[authorName])
    document.title =author;
    const Quotes=authorQuotes.map((quote,index)=><Quote key={index} quoteText={quote.quoteText}/>);

    if(isError)
        return <h1 className="Warning">Pleas Try Again Later!</h1>;
    if(!Quotes[0])
        return <Loader/>;

    return(
        <Fragment>
            <h1 className="authorName">{author}</h1>
            {Quotes}
        </Fragment>
    );
}
export default AuthorPage;