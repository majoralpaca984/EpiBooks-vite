import { Alert } from 'react-bootstrap';

const Welcome = () => {
    return (
      <>
        <Alert variant="success" className="mt-3 text-center">
          Benvenuto nella nostra libreria online!
          <p>“Un libro ben scelto ti salva da qualsiasi cosa, persino da te stesso”</p>
        </Alert>
        <h2 className="text-center my-3">Scopri i nostri libri!</h2>
      </>
    );
  };
  
  export default Welcome;