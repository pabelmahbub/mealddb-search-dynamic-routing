import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import { Routes, Route, Link,BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Routes>

                <Route exact path="/" element={<Restaurant/>}></Route>
                 <Route path="/restaurant"element={<Restaurant/>}></Route>
                 {/* <Route path="/restaurant/:menuId"element={<MenuDetail/>}></Route> */}






             </Routes>
         </BrowserRouter>


    </div>
  );
}

export default App;
