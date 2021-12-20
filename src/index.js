'use strict';

import _ from 'lodash';
import React, { useState, useEffect, useLayoutEffect }  from "react";
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core/';

import App from './App.js';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#0D6670',
        },
        secondary: {
            main: '#7eba75',
        },
        error: {
            main: '#dc3545',
        },
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.querySelector('#root'),
);