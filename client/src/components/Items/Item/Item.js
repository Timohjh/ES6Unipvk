import React from 'react';
import { Card, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteItem } from '../../../actions/Items';
import useStyles from './styles';

const Item = ({ item, setCurrentId }) => {
  const dispatch = useDispatch();
  const style = useStyles();

  return (
    <Card className={style.card}>
      <Card className={style.card1} />
      <div className={style.overlay}>
        <Typography variant="h6">{moment(item.sleepDate).fromNow()}</Typography>
      </div>
      <div className={style.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(item._id)}><MoreHorizIcon /></Button>
        <Button style={{ color: 'red' }} size="small" onClick={() => dispatch(deleteItem(item._id))}><DeleteIcon /></Button>
      </div>
      <div className={style.details}>
      <Typography><p className={style.diary}>Diary</p></Typography>
      <Typography className={style.info}>{item.info}</Typography>
      </div>
      <div className={style.details2}>
      <Typography className={style.time}>Duration: {item.sleepTime}</Typography>
      <Typography className={style.quality}>Sleep quality: {item.qualityofSleep}</Typography>
      </div>

    </Card>
  );
};

export default Item;