import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { toBeEnabled } from '@testing-library/jest-dom/matchers';

import VideoPage from'./component/VideoPage.js';

import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import LoginComponent from './LoginCoponent.js';
{
  /* The following line can be included in your src/index.js or App.js file */
}
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginComponent/>}> </Route>
    <Route path="/" element={<HomeComponent/>}/>
    <Route path="/video/:id" element={<VideoPage/>}/>



    </Routes>
    </BrowserRouter>
  

  )
}

export default App;
