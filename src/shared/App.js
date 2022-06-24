import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '../css/GlobalStyles';
//components
import Footer from '../components/Footer'
import Header from '../components/Header'
//Sub
import Abc from '../pages/Abc';
import PageNotFound from '../pages/PageNotFound';
import Main from '../pages/Main';



function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/abc" element={<Abc />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
      <GlobalStyles/>
  </BrowserRouter>
  );
}

export default App;
