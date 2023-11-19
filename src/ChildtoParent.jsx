// import React,{useState} from 'react';

// const ChildtoParent = (props) => {
//      const [name, setname] = useState("");
//       const handleSubmit=(e)=>{
//             e.preventDefault();
//              props.onSubmit(name)
//       }
//        const handleChange=(e)=>{
//         setname(e.target.value)
//        }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={name} onChange={handleChange}/>
//              <button>Add</button>
//         </form>
//     );
// }

// export default ChildtoParent;



import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const ChildtoParent = (props) => {
    
    const [name,setname] = useState("");
    const handleChange=(e)=>{
        setname(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit(name)
    }
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    
    >
    <Form.Item
      label="Username"
      name="username"
      rules={[
          {
              required: true,
          message: 'Please input your username!',
        },
    ]}
    >
      <Input onChange={handleChange} value={name}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
          {
              required: true,
              message: 'Please input your password!',
            },
        ]}
        >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
    }}
    >
      <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>

}
export default ChildtoParent;