import {createTheme} from '@mui/material/styles';

export default createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#FFCC80',
                light: '#FFF3E0',
                dark: '#FFA726',
                contrastText: 'rgba(0, 0, 0, 0.85)',
            },
            secondary: {
                main: '#A5D6A7',
                light: '#E8F5E9',
                dark: '#66BB6A',
                contrastText: 'rgba(0, 0, 0, 0.85)',
            },
            warning: {
                main: '#CE93D8',
                light: '#F3E5F5',
                dark: '#AB47BC',
                contrastText: 'rgba(0, 0, 0, 0.85)',
            },
            background: {
                default: '#27241D',
                paper: '#27241D',
            },
            text: {
                primary: '#FFCC80',
                secondary: '#FFCC80',
            },
        },
    },
);
