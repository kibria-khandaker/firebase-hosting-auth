import { useEffect, useState } from "react";

const usePaintings = () => {
    const [paintings, setPaintings] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setPaintings(data)
                // setSearchResults(data)
            })
    }, []);
    return [paintings, setPaintings];
}

export default usePaintings;

// need to use this object for search function