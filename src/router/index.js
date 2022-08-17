import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { HomePages } from '../pages/HomePages';

export function RouterWeb() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={ <HomePages/> } />
            </Routes>
        </Router>
    )
}