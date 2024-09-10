import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RoomPage from './pages/Room';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='/room/:roomId' element={<RoomPage/>}></Route>
    </Routes>
    
  );
}

export default App;
