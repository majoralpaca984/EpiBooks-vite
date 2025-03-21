import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

import fantasy from '../data/fantasy.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import history from '../data/history.json';

const AllTheBooks = () => {
  const allBooks = [...fantasy, ...horror, ...romance, ...scifi, ...history];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5 px-4">
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un libro per titolo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row className="gx-4 gy-4">
        {filteredBooks.map((book, index) => (
          <Col key={`${book.asin}-${index}`} xs={12} sm={6} md={4} lg={3} xl={2}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
