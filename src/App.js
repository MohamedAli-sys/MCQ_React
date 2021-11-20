import './App.css';
import { Header } from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Questions from './Pages/Questions/Questions';
import { useState } from 'react';
import { IsLoggedInProvider } from './Services/Login';
import { ResultsProvider } from './Services/Result';
import Result from './Pages/Result/Result';
import Logout from './Components/Logout/Logout';

function App() {
  const [log, setLog] = useState(false);
  const [res, setRes] = useState({ count: 0, answered: false })
  return (
    <div className="App">
      <IsLoggedInProvider value={{ log, setLog }}>
        <ResultsProvider value={{ res, setRes }}>
          {window.location.pathname === "/Login" ? null : <Header />}
          <Router>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/Exam" exact element={<Questions />} />
              <Route path="/Result" exact element={<Result />} />
              <Route path="/Login" exact element={<Login />} />
              <Route path="/Logout" exact element={<Logout />} />
              <Route path="*" exact element={<NotFound />} />
            </Routes>
          </Router>
        </ResultsProvider>
      </IsLoggedInProvider>
    </div>
  );
}

export default App;
