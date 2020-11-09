import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

//call useLocalStorage
export const useDarkMode = (initialValue) => {
const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)

//Inside it, check to see if the value from useLocalStorage is true or false.
// If it's true, add the class dark-mode to the body element.
// If it's false, remove the class from the body element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
// We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }

    }, [darkMode])

    return [darkMode, setDarkMode];
}