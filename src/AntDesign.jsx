import React, { useState } from 'react';
import { Button, Flex } from 'antd';
import './AntDesign.css'
const AntDesign = () => {
      const[loading,setLoading]= useState(false);
       function clickme(e){
         setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
       }
    return (
        <div className='container' >
            <h1>Hello World</h1> 
            <Button onClick={clickme} loading={loading} type="primary" icon={<Power}>Press me</Button>
        </div>
    );
}

export default AntDesign;
