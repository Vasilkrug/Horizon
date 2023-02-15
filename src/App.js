import './App.scss';
import React from "react";
import {Route, Routes,} from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import NavBar from "./components/NavBar/NavBar";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Header from "./components/Header/Header";


const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <div className={'content-wrapper'}>
                <Header className={'header'}>
                    <HeaderNav/>
                </Header>
                <main className={'main'}>
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
