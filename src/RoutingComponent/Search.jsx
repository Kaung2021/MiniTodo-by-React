import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const SecondPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          Second Page
        </Title>
      </Header>

      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={3}>Welcome to the Second Page</Title>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Your Website ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default SecondPage;
