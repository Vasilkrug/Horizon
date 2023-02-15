import './App.scss';
import React from "react";
import {Route, Routes,} from "react-router";
import Dashboard from "./pages/dashboard/dashboard";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/dashboard'} element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default App;
