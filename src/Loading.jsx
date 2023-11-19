import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const MyForm = () => {
  // Function to handle form submission
  const onFinish = (values) => {
    console.log('Received values:', values);
    message.success('Form submitted successfully!');
  };

  // Function to handle form submission errors
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Form submission failed. Please check the errors.');
  };

  return (
    <Form
      name="loginForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical" // or "horizontal" as per your preference
    >
      {/* Username field */}
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please enter your username!' },
          { min: 3, message: 'Username must be at least 3 characters!' },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter your username" />
      </Form.Item>

      {/* Password field */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter your password!' },
          { min: 6, message: 'Password must be at least 6 characters!' },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
      </Form.Item>

      {/* Submit button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
