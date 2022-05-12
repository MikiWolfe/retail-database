import {Routes, Route } from "react-router-dom"
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import Footer from './component/Footer'
export default function App() {
  return (
   <>
 <Routes > 
    <Route path ='/' element={<FrontPage />}/>
      <Route path ='/homepage' element= {<HomePage />}/>
  </Routes>
      <Footer />
      </>
  );
}

