import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

const CrudExample = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);

  const showModal = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setEditingRecord(null);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingRecord) {
          // Update existing record
          const updatedData = data.map((item) =>
            item.key === editingRecord.key ? { ...item, ...values } : item
          );
          setData(updatedData);
        } else {
          // Add new record
          setData([...data, { key: Date.now(), ...values }]);
        }

        setModalVisible(false);
        setEditingRecord(null);
        form.resetFields();
      })
      .catch((error) => {
        console.error('Error saving record:', error);
      });
  };

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => showModal(null)}>
        Add Record
      </Button>
      <Table dataSource={data} columns={columns} />

      <Modal
        title={editingRecord ? 'Edit Record' : 'Add Record'}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter an email' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CrudExample;
