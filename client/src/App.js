import React, { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Items from './components/Items/Items';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const style = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={style.appBar} position="relative" color="inherit">
                <Typography className={style.heading} variant="h2" align="center">Sleep Diary</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={15} sm={8}>
                            <Items currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;