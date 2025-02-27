import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        {/* <Route path="/contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
