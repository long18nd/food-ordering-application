import './App.css'
import Layout from "./layout/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Restaurants from "./pages/restaurants/Restaurants.tsx";
import RestaurantMenu from "./pages/restaurants/menu/RestaurantMenu.tsx";

function App() {

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route  path='/restaurants/:id' element={<RestaurantMenu/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
