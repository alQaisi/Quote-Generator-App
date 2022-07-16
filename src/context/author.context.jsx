import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthorContext=createContext({
    author:"",
    authorQuotes:[],
    isError:false,
});

export function AuthorProvider({children}){
    const [author,setAuthor]=useState("");
    const [authorQuotes,setAuthorQuotes]=useState([]);
    const [isError,setIsError]=useState(false);
    const value={author,setAuthor,authorQuotes,isError};
    
    const navigate=useNavigate();

    useEffect(function(){
        async function getQuote(){
            try{
                const response=await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`);
                const {data}=await response.json();
                setAuthorQuotes(data);
                data[0]?setAuthor(data[0].quoteAuthor):navigate("/404");
            }catch(err){
                setIsError(true);
            }
        }
        const abortController=new AbortController();
        author?getQuote():(()=>null)();
        return ()=>{
            abortController.abort();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[author])

    return(
        <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
    )
    
}