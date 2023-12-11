import React,{useState,useEffect} from 'react';
 

const Apitesting = () => {
      const[data,setData]  =   useState(null);
      const[loading,setLoading] = useState(true)
       useEffect(()=>{
        const fetchData  = async ()=>{
            try {
                 const response = await fetch('https://reqres.in/api/users?page=2');
                  if(!response.ok){
                    throw new Error('NetWork response was not ok')
                  }
                   const jsonData = await response.json();
                    setData(jsonData)
            } catch (error) {
                console.error("Error fetching data : ",error)
            }finally{
                setLoading(false)
            }
        }
         fetchData()
       },[]) //empty dependency array means this effect will run once when the components mount
       if(loading){
        return <p>Loading...</p>
       }
    return (
        <div>
             <h1>Api testing</h1>
              {data ? (
                <ul>
                    {data.map(item=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
              ):(
                <p>No data available</p>
              )}
        </div>
    );
}

export default Apitesting;
 