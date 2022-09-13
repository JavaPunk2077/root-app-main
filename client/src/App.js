import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Home, Login, Onboard, Register, Contributor, Main , Creater , Editer} from './components'

function App() {
  const token = localStorage.getItem('token')
  if(token){
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/creater" element = {<Creater/>}/>
            <Route path="/main" element = {<Main/>}/>
            <Route path="/editer" element = {<Editer/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  else{
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/onBoard" element={<Onboard/>}/> //
            <Route path="/register" element = {<Register/>}/>
            <Route path="/contributor" element = {<Contributor/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
