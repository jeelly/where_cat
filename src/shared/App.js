import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
//Redux
import { useDispatch } from "react-redux";

import GlobalStyles from '../css/GlobalStyles';
//components
import Footer from '../components/Footer'
import Header from '../components/Header'
//Sub
import PageNotFound from '../pages/PageNotFound';
import Main from '../pages/Main';
import { useEffect, useState } from 'react';
import { loadpostsDB } from '../redux/modules/postsSlice';

function App() {  
  const dispatch = useDispatch();
  const [isloaded, setIsloaded] = useState(false);

  useEffect (() => {
  dispatch(loadpostsDB(0));
  setIsloaded(true);
  }, []);

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={isloaded && <Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
      <GlobalStyles/>
  </BrowserRouter>
  );
}

export default App;
