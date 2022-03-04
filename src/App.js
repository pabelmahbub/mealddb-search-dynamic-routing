import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import { Routes, Route, Link,BrowserRouter } from "react-router-dom";
import MenuDetail from './components/MenuDetail/MenuDetail';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Routes>

                <Route exact path="/" element={<Restaurant/>}></Route>
                 <Route exact path="/restaurant"element={<Restaurant/>}></Route>
                  <Route path="/menuDetail/:menuId" element={<MenuDetail/>}></Route>
                  <Route path="*"element={<NotFound/>}></Route>






             </Routes>
         </BrowserRouter>


    </div>
  );
}

export default App;
