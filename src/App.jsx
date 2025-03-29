import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import CommentArea from './components/CommentArea';
import { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container className="mt-3">
        <Welcome />
        <Row>
          <Col lg={8} className="mb-4">
            <AllTheBooks
              searchQuery={searchQuery}
              selectedAsin={selectedAsin}
              setSelectedAsin={setSelectedAsin}
            />
          </Col>
          <Col lg={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
