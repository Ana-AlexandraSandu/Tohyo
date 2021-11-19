import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {ThemeProvider} from "@mui/material";
import theme from "./commons/themes";
import Home from "./modules/Home/Home";

function App()
{
    return <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>}
                       path="/"
                />
            </ Routes>

        </BrowserRouter>
    </ThemeProvider>;

}

export default App;
