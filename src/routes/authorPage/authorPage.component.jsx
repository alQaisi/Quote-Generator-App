import Quote from "../../components/quote/quote.component";
import { useParams } from 'react-router';
import { useContext,useEffect } from "react";
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
    const Quotes=authorQuotes.map((quote,index)=><Quote key={index} quoteText={quote.quoteText}/>)
    return(
        <>
        {
            isError?
            <h1 className="Warning">Pleas Try Again Later!</h1>:
            Quotes[0]
            ?(<>
                <h1 className="authorName">{author}</h1>
                {Quotes}
            </>)
            :<Loader/>
        }
        </>
    );
}
export default AuthorPage;