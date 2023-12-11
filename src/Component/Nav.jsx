// Import necessary libraries
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, InputGroup, FormControl, Button, Card, Row } from 'react-bootstrap';

// Main App component
const Nav = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
 const apiKey  = `50bdaf5a190dd18ceb4f9449bcf80d15`;
  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}=${query}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Movie DB</Navbar.Brand>
      </Navbar>
      <Container className="mt-3">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for a movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={searchMovies}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Row>
          {searchResults.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
