import {Box, Button, Container, Paper, TextField} from "@mui/material";

const Home = () =>
{
    return <Box
        display="flex"
        justifyContent="center"
    >
        <Paper elevation={0}
               sx={{
                   width: '50vw',
                   height: '50vh',
                   /* bgcolor: 'primary.dark',*/
                   opacity: 0.7,

               }}

        >
            <Box display="flex" justifyContent="center" marginTop={'50px'}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                <Button variant="outlined">Join room</Button>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={'50px'}>
                <Button variant="outlined">Create room</Button>
            </Box>
        </Paper>
    </Box>;
};

export default Home;
;