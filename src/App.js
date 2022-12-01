import "@/assets/css/reset.css";
import Header from "./components/app-head";
import Bottom from './components/app-bottom'
import {Route, Routes} from "react-router-dom";
import React from "react";
import routers from "./router";
import Player from "./components/app-player";
function App() {
    return (
        <div>
            <Header/>
            <Routes>
                {
                    routers.map((item, index) => {
                        return (
                            <Route path={item.path} element={<item.component/>} key={index}/>
                        )
                    })
                }
            </Routes>
            <Bottom/>
            <Player/>
        </div>
    );
}

export default App;
