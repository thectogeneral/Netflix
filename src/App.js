import { useContext } from "react";

import './App.css';
import NavbarWithoutUser from "./components/Header/NavbarWithoutUser";
import Navbar from "./components/Header/Navbar";
import { AuthContext } from "./Context/UserContext";

function App() {
  const { User, setUser } = useContext(AuthContext);
  
  return (
    <div className="App">
      {User ? <Navbar></Navbar> : <NavbarWithoutUser></NavbarWithoutUser>}
    </div>
  );
}

export default App;
