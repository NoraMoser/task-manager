import { useState, useEffect } from "react"

function useLocalStorage(key, initValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (e) {
      console.error(e)
      return initValue;
    }
  })
  
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }  catch (e) {
      console.error(e)
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue]
}

export default useLocalStorage;