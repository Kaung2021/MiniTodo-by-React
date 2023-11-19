import React,{useState} from 'react';
import Child from './Child'
const Parent = () => {
         const [message, setmessage] = useState("Hello Word");
            //hello world is the initial state message
                //   callback function for child componet 
                     const callBackmes =(e)=>{
                         setmessage(e)
                     }
    return (
        <div>
             <h1>{message}</h1>
                 <Child callbackFunction={callBackmes}/>
        </div>
    );
}

export default Parent;
