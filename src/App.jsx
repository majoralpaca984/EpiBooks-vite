import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { ThemeContext } from './modules/context';

import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea';
import MyFooter from './components/MyFooter';
import NotFound from './pages/NotFound';
import BookDetails from './pages/BookDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsin, setSelectedAsin] = useState(null);

  // Utilizziamo "theme" invece di "themes" per maggiore chiarezza
  const [theme, setTheme] = useState('light');

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    minHeight: '100vh'
  };

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div style={appStyle}>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
