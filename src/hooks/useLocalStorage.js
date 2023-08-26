import { useState } from "react";

export const useLocalStorage = (key,initialValue) => {
    const [data,setData] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        } 
        window.localStorage.setItem(key,JSON.stringify(initialValue));
        return initialValue; 
    })

    const changeHandler = (value) => {
        setData(value);
        window.localStorage.setItem(key,JSON.stringify(value))
    }

    return [data,changeHandler];
}