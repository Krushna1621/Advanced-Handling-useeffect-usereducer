import React,{useState,useEffect} from "react";

const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{}
})

export const AuthContextProvider=(props)=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false) 

    useEffect(()=>{
        const storageloggedInInformation=localStorage.getItem('isLoggin');
        if(storageloggedInInformation==='1'){
          setIsLoggedIn(true)
        }
      },[])

    const loginHandler=()=>{
        localStorage.setItem('isLoggin','1');
        setIsLoggedIn(true)
    }
    const logoutHandler=()=>{
        localStorage.removeItem('isLoggin')
        setIsLoggedIn(false)
       
    }

    return(<AuthContext.Provider
            value={{isLoggedIn:isLoggedIn,
                    onLogout:logoutHandler,
                    onLogin:loginHandler    }}>
            {props.children}</AuthContext.Provider>)

}


export default AuthContext;