import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WritePage from './views/write/write.js';
import MainPage from './views/main/main.js';
import EditPage from './views/edit/edit';
import ContentPage from './views/content/content';
import ListPage from "./views/list/list";

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/edit" element={<EditPage />} />
                    <Route path="/content" element={<ContentPage />} />
                    <Route path="/list" element={<ListPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
