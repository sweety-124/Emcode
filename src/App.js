import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './styles/mapStyle.scss'
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
