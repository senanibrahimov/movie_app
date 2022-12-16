import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SearchingArea } from "./components/SearchingArea/SearchingArea";
import {OpenedMovie} from './components/MoviePage/OpenedMovie/OpenedMovie'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchingArea />} />
            <Route path="/movie/:id" element={<OpenedMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
