import { Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import scifi from '../data/scifi.json';
import history from '../data/history.json';
import romance from '../data/romance.json/';

const AllTheBooks = ({ searchQuery, selectedAsin, setSelectedAsin }) => {
  
  const allBooksRaw =  ([...scifi, ...history,...romance,]);

  
  const allBooks = allBooksRaw.filter(
    (book, index, self) => index === self.findIndex((b) => b.asin === book.asin)
  );

  
  const filteredBooks = allBooks.filter(
    (book) =>
      typeof book.title === 'string' &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Row className="gy-4">
      {filteredBooks.map((book) => (
        <Col key={book.asin} xs={6} sm={4} md={3} lg={4} xl={3}>
          <SingleBook
            book={book}
            isSelected={book.asin === selectedAsin}
            onSelect={() => setSelectedAsin(book.asin)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
