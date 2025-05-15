import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import ApplyPage from './pages/apply';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
