import { useEffect, useState } from "react";

const usePaintings = () => {
    const [paintings, setPaintings] = useState([]);
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setPaintings(data)
                // setSearchResults(data)
            })
    }, []);

    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        if (searchText === '') {
            setSearchResults([])
            return;
        }
        if (!searchText.trim()) {
            return;
        }
        console.log(searchText);
        const match = paintings.filter(paint => paint.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchResults(match);
    }

    return { paintings, setPaintings, searchResults, setSearchResults, handleSearchChange };
}

export default usePaintings;