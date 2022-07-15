import { createContext, useEffect, useState } from "react";

export const QuoteContext=createContext({
    quote:undefined,
    isError:false,
    fetchData:false
});

export function QuoteProvider({children}){
    const [quote,setQuote]=useState(undefined);
    const [isError,setIsError]=useState(false);
    const [fetchData,setFetchData]=useState(false);

    function reload(){
        setQuote(undefined);
        setFetchData(!fetchData);
    }

    useEffect(function(){
        const abortController=new AbortController();
        async function getQuote(){
            const genre=["food","age","life","time","happiness","motivational","dreams","success","business","inspirational"];
            const genreIndex=Math.floor(Math.random()*10);
            try{
                const response=await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?genre=${genre[genreIndex]}&limit=100`);
                const {data}=await response.json();
                const quoteIndex=Math.floor(Math.random()*data.length);
                setQuote(data[quoteIndex]);
            }catch(err){
                setIsError(true);
            }
        }
        getQuote();
        return ()=>{
            abortController.abort();
        }
    },[fetchData]);
    const value={isError,quote,reload}
    return(
        <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
    )
}