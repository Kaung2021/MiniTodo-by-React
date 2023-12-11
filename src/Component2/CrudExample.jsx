import React,{useState} from 'react';
import { Form } from 'antd';
const CrudExample = () => {
          const [data,setData] = useState([]);
          const [modalVisible,setModalVisible] = useState(false);
          const [form] = Form.useForm();
           const [editingRecord,setEditingRecord] = useState(null)

             const showModal = (record) =>{
                 setEditingRecord(record);
                 form.setFieldsValue(record);
                 setModalVisible(true)
             }
              const handleCancel = ()=>{
                setModalVisible(false);
                setEditingRecord(null);
                form.resetFields();
              }
               const handleOk = ()=>{
                form.validateFields().then((values)=>{
                    if(editingRecord){
                        // update existing record
                         const updatedData = data.map((item)=>{
                            item.key === editingRecord.key ? {...item,...values}:item
                         });
                         setData(updatedData)
                    }else {
                        //  add a new record
                         setData([...data,{key:Date.now(),...values}])
                    }
                     setModalVisible(false);
                     setEditingRecord(null);
                     form.resetFields()
                }).catch((error)=>{
                    console.log('Error saving record : ',error)
                })
               };
                const handleDelete = (key)=>{
                    const updatedData = data.filter((item)=>item.key!== key)
                 setData(updatedData)
                }
           return (
        <div>
            
        </div>
    );
}

export default CrudExample;
