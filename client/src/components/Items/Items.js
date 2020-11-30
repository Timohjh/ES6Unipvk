import React, {useState, useEffect} from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Item from './Item/Item';
import useStyles from './styles';
import './Items.css';
import { getItems } from '../../actions/Items';

const Items = ({ currentId, setCurrentId }) => {
  const items = useSelector((state) => state.items);
  const style = useStyles();
  const [username, setUsername] = useState({ username: ''});
  const dispatch = useDispatch();
  const [rendering, setRendering] = useState(false)

  useEffect(() => {
    if(username !== '' && items.length !== '' && rendering === true){
    setRendering(false);
  }}
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getItems());
    setRendering(true);
  };    

  return (
    items.length === 0 ? <Paper className={style.paper}>
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
    <TextField required name="username" className={style.input} variant="outlined" label="username" render={setRendering} value={username.username} onChange={(e) => setUsername({ ...username, username: e.target.value })} /> 
    <Button className={style.nappi} variant="contained" color="primary" size="large" type="submit">OK</Button></form></Paper>
    : (<div className="itemContainer">
      <Grid className={style.mainContainer} container alignItems="stretch" spacing={3}>
        {items.filter(name => name.username === username.username).map((item) => (
          <Grid key={item._id} item xs={12} sm={6} md={6}>
            
            <Item item={item} setCurrentId={setCurrentId} username={username}/>
            
          </Grid>
        ))}
      </Grid>
    </div>
      )
  );
};

export default Items;