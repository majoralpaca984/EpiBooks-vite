import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../modules/context';

const WelcomeBanner = () => {
  const [theme] = useContext(ThemeContext);

  const bgColor = theme === 'dark' ? '#333333' : '#f0f4f8';
  const textColor = theme === 'dark' ? '#ffffff' : '#333333';

  return (
    <div style={{ backgroundColor: bgColor, marginBottom: '2rem' }}>
      <Container className="py-4">
        <Row className="align-items-stretch">
          <Col xs={12} md={8} className="mb-3 mb-md-0 d-flex flex-column justify-content-center">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', color: textColor }}>
              Benvenuto su EpiBooks
            </h1>
            <p className="lead mb-0" style={{ color: textColor }}>
              Scopri una vasta selezione di libri e trova il tuo prossimo grande titolo.
            </p>
          </Col>
          <Col xs={12} md={4} className="p-0">
            <img
              src="src/img/books.jpg"
              alt="Books"
              className="img-fluid"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeBanner;
