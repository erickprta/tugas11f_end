import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layouts from './layouts/Layouts';
import { useState } from 'react';
import DataMovie from './utils/DataMovie';
import GlobalStyle from './components/Global/GlobalStyle';


function App() {
   
  const [ data, setData ] = useState(DataMovie)

  return (
   <>
     <GlobalStyle/>
     <Layouts>
      <Routes>
      <Route path='/' element={<Home  item={data} setItem={setData}/>} />
      <Route path='/Popular' element={<Popular />} />
      <Route path='/Add' element={<Add  item={data} setItem={setData}/>} />
    </Routes>
    </Layouts>
     
   </>
  )
}

export default App;
