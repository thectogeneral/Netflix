import { useContext, Suspense, useEffect, lazy } from "react";

import './App.css';
import NavbarWithoutUser from "./components/Header/NavbarWithoutUser";
import Navbar from "./components/Header/Navbar";
import Loading from "./components/Loading/Loading";
import { AuthContext } from "./Context/UserContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const SignIn = lazy(() => import("./Pages/SignIn"));

function App() {
  const { User, setUser } = useContext(AuthContext);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  
  return (
    <div className="App">
      {User ? <Navbar></Navbar> : <NavbarWithoutUser></NavbarWithoutUser>}
      <Suspense replace fallback={<Loading />}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
