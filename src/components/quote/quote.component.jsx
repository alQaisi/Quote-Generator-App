import { QuoteCont, QuoteInfo, RightArrow, AuthorName, QuoteText } from './quote.style';
import { Link } from 'react-router-dom';

function Quote({quoteAuthor,quoteGenre,quoteText}){
    return(
        <QuoteCont>
            <QuoteText>
                &#8220;{quoteText}&#8221;
            </QuoteText>
            {
                quoteAuthor
                ?(
                    
                    <Link to={`${quoteAuthor}`}><QuoteInfo>
                        <AuthorName genre={quoteGenre}>{quoteAuthor}</AuthorName>
                        <RightArrow/>
                    </QuoteInfo></Link>
                )
                :null
            }
        </QuoteCont>
    );   
}
export default Quote;