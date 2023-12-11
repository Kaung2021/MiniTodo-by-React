// Import necessary libraries
import React, { useState } from 'react';
import { Layout, Input, Button, Row, Col,Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Content } = Layout;

// Main App component
const App = () => {
  // State variables for storing search results and user input
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
 const api = `50bdaf5a190dd18ceb4f9449bcf80d15`
  // Function to fetch movie data based on the user's search query
  const searchMovies = async () => {
    try {
      // Make a GET request to the TMDb API using Axios
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`
      );
      // Update the searchResults state with the fetched movie data
      setSearchResults(response.data.results);
    } catch (error) {
      // Log an error message if there's an issue fetching data
      console.error('Error fetching data:', error);
    }
  };

  // JSX structure of the component
  return (
    <Layout>
      {/* Header section with a Navbar */}
      <Header>
        {/* Row with two columns: One for the logo and the other for the search input */}
        <Row justify="space-between">
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className="logo">React Movie DB</div>
          </Col>
          <Col xs={24} sm={12} md={16} lg={18}>
            <Input
              placeholder="Search for a movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onPressEnter={searchMovies}
              suffix={
                <Button type="primary" icon={<SearchOutlined />} onClick={searchMovies}>
                  Search
                </Button>
              }
            />
          </Col>
        </Row>
      </Header>
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

// Export the App component as the default export of the module
export default App;
