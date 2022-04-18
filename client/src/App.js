import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/routes/index";
import $ from 'jquery';
function App() {



 

  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
    
  );

  
}

export default App;
