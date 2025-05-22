import './App.css'
import Layout from "./layout/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
