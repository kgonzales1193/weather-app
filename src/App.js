import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import LoginButton from './components/Login';
import Weather from './components/Weather';
import Home from './pages/Home';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        <Header />
        {!isAuthenticated ? (
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="landing-content mb-0">
                Welcome to the Weather Forecast web application.
                <br /> Please login to use the application and view the weather
                in your city.
              </p>
            </blockquote>
            <LoginButton />
          </figure>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
