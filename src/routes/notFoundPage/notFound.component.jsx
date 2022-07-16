import { ReactComponent as ErrorImage } from './undraw_page_not_found_re_e9o6.svg';
import './notFound.style.css';

function NotFoundPage(){
    document.title ="404 Not Found";
    return(
        <div className='ErroCont'>
            <ErrorImage className='Error'/>
        </div>
    );
}
export default NotFoundPage;