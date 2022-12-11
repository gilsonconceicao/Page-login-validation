import { useEffect, useState } from "react";

export function useAuthUser () {
    const [isLogged, setIsLogged] = useState<boolean | null>(true); 
    
    const [userCameIn, setUserCameIn] = useState<boolean | null>(true);
  
    useEffect(() => {
      const checkedIsUser = () => {
        if (localStorage.getItem('@data-user') === null) { 
          setIsLogged(null);
        } 
        if (localStorage.getItem('@userCamein') === null) {
          setUserCameIn(null);
        }
      }
      checkedIsUser()
    }, [])

    return {isLogged, userCameIn}
}