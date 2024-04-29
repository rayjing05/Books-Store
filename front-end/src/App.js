
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/signup';
import PrivateComponent from './components/privatecomponent';
import Login from './components/login';
import Addbooks from './components/Add-books'

import UpdateBooks from './components/updateBooks'

import BookList from './components/Books-list';

import BookDetails from './components/bookdetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<BookList />}></Route>

            <Route path="/add" element={<Addbooks />} />

            <Route path="/update/:id" element={<UpdateBooks />}></Route>

            <Route path="/details/:id" element={<BookDetails />}></Route>

            <Route path="/logout" element={<h1>logout  Component</h1>}></Route>


          </Route>

          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}



export default App;
