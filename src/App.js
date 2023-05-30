import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import EventPage from './pages/EventPage';
import EventFormPage from './pages/EventFormPage';
import EventDetailsComponent from './components/EventDetailsComponent';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event-form" element={<EventFormPage />} />
          <Route path="/event-details" element={<EventDetailsComponent />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
