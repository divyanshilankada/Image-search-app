import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './search';
import Bookmark from './bookmark';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Search></Search>}></Route>
                <Route path='/bookmark' element={<Bookmark></Bookmark>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
