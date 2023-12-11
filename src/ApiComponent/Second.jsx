import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Row, Col, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Content } = Layout;

const SecondPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const apiKey  = `50bdaf5a190dd18ceb4f9449bcf80d15`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch movies when the component mounts or when the query changes
    fetchMovies();
  }, [query]);

  return (
    <Layout>
    
     <Row justify="space-between" align="middle" style={{ padding: '10px', backgroundColor: '#f0f2f5' }}>
      <Col xs={24} sm={12} md={8} lg={6}>
        {/* Logo */}
        <div style={{ textAlign: 'left' }}>
          <h4>👿</h4>
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        {/* Search Bar */}
         <Input
              placeholder="Search for a movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}            
              prefix={<SearchOutlined onClick={()=>{}}/>}
             
              />
      </Col>
    </Row>
       
     
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          {searchResults.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />}
              >
                <Card.Meta title={movie.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default SecondPage;
