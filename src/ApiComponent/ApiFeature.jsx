import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import axios from 'axios';
const { Meta } = Card;

const MovieLibrary = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey  = `50bdaf5a190dd18ceb4f9449bcf80d15`;

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/countries',
    headers: {
      'X-RapidAPI-Key': 'cbf5841c88msh5ef4150e1c709bap1b39afjsn7cab72589370',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  


  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      try {
        // Replace 'YOUR_TMDB_API_KEY' with your actual TMDb API key
        const response = await axios.request(options);
        console.log(response.data);

        setMovies(response.data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch popular movies when the component mounts
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {movies.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />}
              >
                <Meta title={movie.title} description={movie.release_date} />
              </Card>
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};

export default MovieLibrary;
