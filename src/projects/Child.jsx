import React from 'react';
import { Button } from 'antd';
const Child = ({callbackFunction}) => {
         let mes = "you are not alone";
          
    return (
        <div>
             <Button onClick={()=>{callbackFunction(mes)}}>
                Message
             </Button>
        </div>
    );
}

export default Child;
