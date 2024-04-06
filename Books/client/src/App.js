import Main from './Views/Main.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorForm from './components/AuthorForm.jsx';
import Update from './Views/Update.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <h1>Favorite authors</h1>
       <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/new" element={<AuthorForm/>} />
          <Route path="/books/:id/edit" element={<Update/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
