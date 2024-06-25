import {useState, useEffect} from 'react';

const useOnline=()=>{

    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOffline=()=>{
            setIsOnline(false); //making a handle offline function
        };
        const handleOnline=()=>{
            setIsOnline(true); //making a handle online function
        };
        window.addEventListener("online",handleOnline); //using event listner and calling function when it is online
        window.addEventListener("offline", handleOffline); //using event listner and calling function when it is offline
        return ()=>{
            window.removeEventListener("online",handleOnline); //removing event listner when leaving the page so that cache of the browser is clear
            window.removeEventListener("offline",handleOffline);
        };
    },[]);
    return isOnline;
    
};
export default useOnline;


