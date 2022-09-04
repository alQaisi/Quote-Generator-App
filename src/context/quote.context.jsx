import { createContext, useEffect, useReducer } from "react";

const INITIAL_QUOTE_STATE={
    quote:undefined,
    isError:false,
    fetchData:false
};

const QuoteReducer=(state,action)=>{
    const { type, payload}=action;
    switch(type){
        case "RELOAD":
            return {...INITIAL_QUOTE_STATE,fetchData:!state.fetchData};
        case "ERROR":
            return {...INITIAL_QUOTE_STATE,isError:true};
        case "SET_QUOTE":
            return {...state,...payload}
        default:
            return state;
    }
}

export const QuoteContext=createContext({...INITIAL_QUOTE_STATE});

export function QuoteProvider({children}){
    const [{quote,isError,fetchData},dispatch]=useReducer(QuoteReducer,INITIAL_QUOTE_STATE)

    function reload(){
        dispatch({type:"RELOAD"})
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
                dispatch({type:"SET_QUOTE",payload:{quote:data[quoteIndex]}})
            }catch(err){
                dispatch({type:"ERROR"})
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
    );
}