import { createContext, useEffect, useState } from "react";

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

    useEffect(function(){
        async function getQuote(){
            try{
                const response=await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`);
                const {data}=await response.json();
                setAuthorQuotes(data);
            }catch(err){
                setIsError(true);
            }
        }
        const abortController=new AbortController();
        author?getQuote():(()=>null)();
        return ()=>{
            abortController.abort();
        }
    },[author])

    return(
        <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
    )
    
}