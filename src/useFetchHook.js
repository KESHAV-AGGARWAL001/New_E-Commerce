import { useState, useEffect } from 'react'
const useFetchHook = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [data]);

    return data;
}

export default useFetchHook
