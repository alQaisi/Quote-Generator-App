import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_AUTHOR_STATE={
    author:"",
    authorQuotes:[],
    isError:false
};

const AuthorReducer=(state,action)=>{
    const { type, payload}=action;
    switch(type){
        case "ERROR":
            return {...INITIAL_AUTHOR_STATE,isError:true};
        case "SET_AUTHOR_NAME":
            return {...INITIAL_AUTHOR_STATE,author:payload};
        case "SET_AUTHOR_DATA":
            return {...state,...payload}
        default:
            return state;
    }
}

export const AuthorContext=createContext({...INITIAL_AUTHOR_STATE});

export function AuthorProvider({children}){
    const [{author,authorQuotes,isError},dispatch]=useReducer(AuthorReducer,INITIAL_AUTHOR_STATE)

    function setAuthor(authorName){
        dispatch({type:"SET_AUTHOR_NAME",payload:authorName});
    }

    const value={author,setAuthor,authorQuotes,isError};
    
    const navigate=useNavigate();

    useEffect(function(){
        async function getQuote(){
            try{
                const response=await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`);
                const {data}=await response.json();
                if(data[0])
                    return dispatch({type:"SET_AUTHOR_DATA",payload:{authorQuotes:data,author:data[0].quoteAuthor}});
                navigate("/404");
            }catch(err){
                dispatch({type:"ERROR"});
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
    );
}