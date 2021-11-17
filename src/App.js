import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";

function App() {
	
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> }>
                </Route>
                <Route path="/messenger" element={ <Messenger /> }>
                </Route>
            </Routes>
        </BrowserRouter>        
    );
}

export default App;
