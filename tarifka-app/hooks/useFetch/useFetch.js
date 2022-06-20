import {useEffect,useState} from "react"
import axios from "axios"

// useFetch çağrıldığında  gönderilen parametreye istek atıyor ve istek sonucunda loading ve error dtası geri gönderecek.
 
const useFetch = (url) => {
    //state tutuluyor
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {

          const {data:responseData} = await axios.get(url);
          setData(responseData);
          setLoading(false)

        } catch (err) {
          setError(err.message)
          setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {error,loading,data}
}

export default useFetch;