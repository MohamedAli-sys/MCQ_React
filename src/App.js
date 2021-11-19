import './App.css';
import { Header } from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Questions from './Pages/Questions/Questions';
import { useState } from 'react';
import { IsLoggedInProvider } from './Services/Login';

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <IsLoggedInProvider value={{ log, setLog }}>
        {window.location.pathname !== "/Login" ? <Header /> : null}
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/Exam" exact element={<Questions />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Router>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;
