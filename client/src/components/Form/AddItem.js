import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createItem, updateItem } from '../../actions/Items';

const AddItem = ({ currentId, setCurrentId }) => {
    const [itemData, setItemData] = useState({ username: '', info: '', qualityofSleep: '', sleepTime: '' });
    const item = useSelector((state) => (currentId ? state.items.find((iidee) => iidee._id === currentId) : null));
    const dispatch = useDispatch();
    const style = useStyles();

    useEffect(() => {
        if (item) setItemData(item);
      }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createItem(itemData));
          clear();
        } else {
          dispatch(updateItem(currentId, itemData));
          clear();
        }
      };
      const clear = () => {
        setCurrentId(0);
        setItemData({username: '', info: '', qualityofSleep: '', sleepTime: '' });
      };

    
    return(
        <Paper className={style.paper}>
        <form autoComplete="off" noValidate className={`${style.root} ${style.form}`} onSubmit={handleSubmit}>
        <Button className={style.clear} variant="contained" color="secondary" size="small" onClick={clear}>{currentId ? "X" : 'clear'}</Button>
        <Typography className={style.header} variant="h6">{currentId ? "Edit a session" : 'Add a session'} </Typography>
        <TextField required name="username" variant="outlined" label="Name" fullWidth value={itemData.username} onChange={(e) => setItemData({ ...itemData, username: e.target.value })} />
        <TextField required name="info" variant="outlined" label="Diary" fullWidth multiline rows={4} value={itemData.info} onChange={(e) => setItemData({ ...itemData, info: e.target.value })} />
        <TextField required name="qualityofSleep" variant="outlined" label="Quality of sleep (1-10)" fullWidth value={itemData.qualityofSleep} onChange={(e) => setItemData({ ...itemData, qualityofSleep: e.target.value })} />
        <TextField required name="sleepTime" variant="outlined" label="Time slept" fullWidth value={itemData.sleepTime} onChange={(e) => setItemData({ ...itemData, sleepTime: e.target.value })} />
        <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit">OK</Button>
        </form>
        </Paper>
    );
}
export default AddItem;