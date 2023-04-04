import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Gender } from './pages/Gender';
import { DateOfBirth } from './pages/DateOfBirth';
import { Footer } from './components/Footer';
import { ArrowBack } from './components/ArrowBack/ArrowBack';
import { DataLoader } from './pages/DataLoader';
import { Questionnaire } from './components/Questionnaire';
import { Decision } from './components/Decision';
import { EmailPage } from './pages/EmailPage';
import { ThankYou } from './pages/ThankYou';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <Header
          isWhite={
            location.pathname === '/connection' ||
            location.pathname === '/decision'
          }
        />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {location.pathname !== '/' ? (
                <>
                  <ArrowBack
                    isWhite={
                      location.pathname === '/connection' ||
                      location.pathname === '/decision'
                    }
                  />
                  <Outlet />
                  <Footer
                    isWhite={
                      location.pathname === '/connection' ||
                      location.pathname === '/decision'
                    }
                  />
                </>
              ) : (
                <Gender />
              )}
            </>
          }
        >
          <Route path="/date" element={<DateOfBirth />} />
          <Route path="/connection" element={<DataLoader />} />
          <Route path="/question/:id" element={<Questionnaire />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
