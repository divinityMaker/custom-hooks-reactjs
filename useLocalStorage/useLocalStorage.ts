import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any): [any, (value: any) => void] => {
    
    // Check if localStorage is available
    if (!window || !window.localStorage) {
        throw new Error('localStorage is not available in this environment');
    }

    // Use the state hook to store the value in localStorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get the stored value from localStorage and parse it back to the original type
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If an error occurred, return the initial value
            return initialValue;
        }
    });

    // Return a function that can be used to update the stored value
    const setValue = (value: any) => {
        try {
            // Convert the value to a string and store it in localStorage
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // If an error occurred, do nothing
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage