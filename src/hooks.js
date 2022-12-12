import apiData from "./data";
const { useState } = require("react");


const useFetch = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = (url,config) => {
        // setLoading(true);
        // fetch(url,config)
        // .then((res) => {
        //    const x = res.json();
        //    return x;
        // })
        // .then((data) => {
        //     setData(apiData);
        //     setLoading(false);
        // })
        // .catch(() => {
        //     setData(apiData);
        //     setLoading(false);
        // })
        setData(apiData);
            setLoading(false);
    }

    return {data, loading, error, request};
}

export default useFetch;