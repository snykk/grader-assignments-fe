import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home';
import Photos from './routes/Photos';
import AddPhoto from './routes/AddPhoto';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/photos'>My Photos</Link>
        <Link to='/add'>Add Photo</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
