import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DarkThemeToggle} from "flowbite-react";
import Generatore from "./Generatore";
import Tabella from "./Tabella";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <br/>
            <div><DarkThemeToggle/></div>
            <Generatore>
                {array => (
                    <Tabella array={array}></Tabella>
                )}
            </Generatore>
        </div>
    </React.StrictMode>
);
