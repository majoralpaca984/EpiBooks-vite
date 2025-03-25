import fantasy from '../data/fantasy.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import history from '../data/history.json';

import { Card, Col, Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

const AllTheBooks = ({ searchQuery }) => {
  const allBooks = [...fantasy, ...horror, ...romance, ...scifi, ...history];


  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        {filteredBooks.map((book) => (
          <Col key={`${book.asin}-${book.title}`} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

