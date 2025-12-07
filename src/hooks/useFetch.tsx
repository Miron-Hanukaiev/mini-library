// Custom hook for fetching data with error & loading handling

import { Book } from '../types';
import { useState, useEffect } from 'react';

const useFetch = (url : string) => {
    const[books, setBooks] = useState<Book[] | null>(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        // Fetch executes once on load or when URL changes
        fetch(url)
            .then(res => {
            if(!res.ok) {
                // Throw to trigger catch block, set error state
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
        })
        .then(data => {
            setBooks(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });
    }, [url]);

    return {data: books, isLoading, error};
};
 
export default useFetch;