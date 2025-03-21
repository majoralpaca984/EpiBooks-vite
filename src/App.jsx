import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';

const App = () => {
  return (
    <>
      <MyNav />
      <div className="main-wrapper"></div>
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default App;
