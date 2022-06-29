import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { loadpostsDB } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";

//component
import AppLayout from "../components/AppLayout";

//Sub
import Singup from "../pages/Singup";
import FindUser from "../pages/FindUser";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Main from "../pages/Main";

function App() {
  const dispatch = useDispatch();
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    dispatch(loadpostsDB(0));
    setIsloaded(true);
  }, []);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={isloaded && <Main />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/finduser" element={<FindUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
