import React,{useState,useEffect} from 'react';
import LoadMore from '../components/loadmore';
import TextAreaWordLimit from '../components/texareawordlimit';

export default function Service() {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await fetch('http://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        catch(error){
            setError(error.message)
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchData();
    },[]);

    const btnRemove = (id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }


    if(loading){
        return(
            <div>{loading}</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div>
        <LoadMore/>
        <TextAreaWordLimit/>
      {data.map((val,index) => {
        return(
            <div key={index}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
                <button onClick={() => btnRemove(val.id)}>&times;</button>
            </div>
        )
      })}
    </div>
  )
}
