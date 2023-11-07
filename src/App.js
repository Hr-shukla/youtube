import logo from './logo.svg';
import './App.css';

import { toBeEnabled } from '@testing-library/jest-dom/matchers';

import VideoPage from'./component/VideoPage.js';

import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<HomeComponent/>}/>
    <Route path="/video" element={<VideoPage/>}/>



    </Routes>
    </BrowserRouter>
  

  )
}

export default App;
