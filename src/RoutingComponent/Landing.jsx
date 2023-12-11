import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          Welcome to Your Website
        </Title>
      </Header>

      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={3}>Discover Something Amazing</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Paragraph>

        <Link to="/second-page">
          <Button type="primary" size="large" style={{ marginTop: '20px' }}>
            Get Started
          </Button>
        </Link>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Your Website ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default LandingPage;
