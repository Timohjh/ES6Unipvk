import React from 'react';
import { Typography, Paper,} from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Average = () => {
    const style = useStyles();
    const items = useSelector((state) => state.items);
    const avg = items.reduce((sleepTime, item) => sleepTime + item.sleepTime, 0) / items.length;
    return(
        <Paper className={style.paper}>
            <Typography className={style.text}>You sleep an average of</Typography>
            <div className={style.bottom}>
                <Typography variant="h6" className={style.number}>{avg.toFixed(2)}</Typography>
                <p className={style.text}>hours</p>
            </div>
        </Paper>
    );
}
export default Average;